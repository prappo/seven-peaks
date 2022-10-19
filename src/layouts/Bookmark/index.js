import { Bookmark as ButtonBookmark } from "../../components";
import './index.scss'

const Bookmark = ({ title, children }) => {
    return (
        <div className="seven-peaks-sort-bookmark-section">
            {title && <h1 className="seven-peaks-sort-bookmark-title">{title}</h1>}

            <ButtonBookmark />

            {children}
        </div>
    )
}

export default Bookmark;