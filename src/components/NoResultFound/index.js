import './index.scss';

const NoResultFound = (props) => {
    return (
        <div className='seven-peaks-no-resut-section' data-testid="seven-peaks-no-result-found" {...props}>
            <p className="seven-peaks-no-result-found" >No results found</p>
        </div>
    )
}

export default NoResultFound;