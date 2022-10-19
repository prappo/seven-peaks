import './index.scss';
import { useTitle } from "../../libs/hooks";

const NotFound = () => {
    useTitle('Page not found');

    return (
        <div className="container">
            <h1 className="seven-peaks-not-found">404, page not found</h1>
        </div>
    )
}

export default NotFound;