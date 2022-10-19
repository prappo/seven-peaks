/**
 * External dependencies
 */
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import LogoImg from '../../assets/images/Logo_White.png';

/**
 * Component style
 */
import './index.scss';

const Logo = () => (
    <Link to="/">
        <img className="seven-peaks-logo" src={LogoImg} alt="The Peaks Logo" />
    </Link>
)

export default Logo;