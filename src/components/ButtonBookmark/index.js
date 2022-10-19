/**
 * External dependencies
 */
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import BookmarkOnIcon from '../../assets/images/bookmarkon-icon-2x.svg';

/**
 * Component style
 */
import './index.scss'

const Bookmark = ({ title = "View Bookmarks", handleBookmark = () => '' }) => {
    return (
        <Link onClick={handleBookmark} to="/bookmarks" className="seven-peaks-bookmark">
            <img src={BookmarkOnIcon} alt="Bookmark Icon" />
            {title}
        </Link>
    )
}

export default Bookmark;