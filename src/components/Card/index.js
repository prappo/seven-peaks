/**
 * External dependencies
 */
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import placeholderLogo from '../../assets/images/placeholder-logo.png';
import { stripsHtmlTag } from '../../libs/helper';

/**
 * Component style
 */
import './index.scss';

const Card = ({ content = {}, showTrailText = false, enbalePlaceholder = true, showThumbnail = true, size = "large" }) => {
    const { fields, webTitle, id } = content,
        { thumbnail, trailText } = fields || {};

    const containerClassess = [
        'seven-peaks-card',
        'seven-peaks-card-' + size
    ];

    return (
        <Link to={`/article/${id}`} className={containerClassess.join(' ')} data-testid="card">
            {showThumbnail ?
                (thumbnail ? <img className="seven-peaks-card-thumbnail" src={thumbnail} alt="Card Thumbnail" /> :
                    (enbalePlaceholder ? <img className="seven-peaks-card-thumbnail placeholder" src={placeholderLogo} alt="Card Placeholder" /> : ''))
                : ''
            }

            <div className={`seven-peaks-card-content ${thumbnail || enbalePlaceholder ? 'has-thumb' : 'no-thumb'}`}>
                {webTitle && <h5 className="seven-peaks-card-content-title">{webTitle}</h5>}
                {(showTrailText && trailText) ? <p data-testid="trail-text" className="seven-peaks-card-content-trail-text">{
                    stripsHtmlTag(trailText)
                }</p> : ''}
            </div>
        </Link>
    )
}

export default Card;