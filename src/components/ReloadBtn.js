export default function ReloadBtn({ setReload }) {
    return (
        <div className="text-center">
            <button onClick={() => setReload(prev => !prev)}>Повторите, пожалуйста действие!</button>
        </div>
    );
}
