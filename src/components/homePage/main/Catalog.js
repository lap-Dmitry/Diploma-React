import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList';
import { fetchItems, fetchMoreItems, setActiveCategory } from '../../../actions/actionCreators';
import Categories from '../../Categories';
import { fetchCategories } from '../../../actions/actionCreators';
import { Preloader } from '../../Preloader';
import ReloadBtn from '../../ReloadBtn';

export default function Catalog(props) {
    const { items, loading, error, loadingMoreItems, errorMoreItems, disable } = useSelector(state => state.itemsListReducer);
    const { categories, loadingCategories, errorCategories, activeCategory } = useSelector(state => state.categoriesReducer);
    const { value } = useSelector(state => state.changeValueReducer);
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);

    useEffect(() => {
        dispatch(fetchItems(activeCategory, value))
    }, [dispatch, activeCategory, reload, value]);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch, reload]);

    const handleClick = (e, id) => {
        e.preventDefault()
        dispatch(setActiveCategory(id))
    };

    const handleBtnClick = (length, activeCategory, value) => {
        dispatch(fetchMoreItems(length, activeCategory, value))
    };

    if (error && errorCategories) {
        return (
            <Fragment><p className="text-center">{error}</p><ReloadBtn setReload={setReload} /></Fragment>
        );
    }

    return (
        <Fragment>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {props.children}
                {loading && loadingCategories ? <Preloader /> :
                    <Fragment>
                        <Categories handleClick={handleClick} categories={categories} activeCategory={activeCategory} />
                        {loading ? <Preloader /> : <ProductList items={items} />}
                    </Fragment>}
                {disable ? null :
                    <div className="text-center">
                        {loadingMoreItems ? <Preloader /> :
                            (errorMoreItems ? errorMoreItems : <button onClick={() => handleBtnClick(items.length, activeCategory, value)} className="btn btn-outline-primary">Загрузить ещё</button>)}
                    </div>}
            </section>
        </Fragment>
    );
}
