import { Fragment } from 'react';
import CartTable from './CartTable';
import CartOrder from './CartOrder';

export default function Cart() {
    return (
        <Fragment>
            <CartTable />
            <CartOrder />
        </Fragment>
    );
}
