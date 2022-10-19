import './index.scss';

const Loader = ({ size = 'large' }) => {

    const containerClass = [
        'seven-peaks-loader',
        'seven-peaks-loader-' + size
    ];

    return (
        <div data-testid="loader" className={containerClass.join(' ')}>
            <div className="seven-peaks-loader-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;