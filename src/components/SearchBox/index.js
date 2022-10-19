/**
 * External dependencies
 */
import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Internal dependencies
 */
import SearchIcon from '../../assets/images/search-icon-2x.svg';
import { useClickOutside } from '../../libs/hooks';

/**
 * Component style
 */
import './index.scss';


const SearchBox = (props) => {
    const [isClickedOutside] = useClickOutside('.seven-peaks-search-box-label');
    const [inputValue, setInputValue] = useState('');
    const searchInput = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        let value = e.target.value;

        setInputValue(value);


        navigate('/search/' + value)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (location.pathname.includes('/search/')) {
            setInputValue(location.pathname.split('/search/')[1]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (isClickedOutside === false) {
            searchInput.current.focus();
        }
    }, [isClickedOutside])

    return (
        <div className="seven-peaks-search-box text-right">
            <label data-testid="label" className={`seven-peaks-search-box-label ${(isClickedOutside === false || inputValue.length > 0) ? 'active' : ''}`}>
                <button className='seven-peaks-search-box-button'><img src={SearchIcon} alt="Search Icon" /></button>
                <input value={inputValue} ref={searchInput} className='seven-peaks-search-box-input' onChange={handleChange} type="search" placeholder='Search all news' />
            </label>
        </div>
    )
};

export default SearchBox;