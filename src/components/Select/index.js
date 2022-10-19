/**
 * External dependencies
 */
import { useState, useMemo, useCallback, memo } from 'react';

/**
 * Internal dependencies
 */
import arrowUp from '../../assets/images/arrow-up.png';
import arrowDown from '../../assets/images/arrow-down.png';
import { useClickOutside } from '../../libs/hooks';

/**
 * Component style
 */
import './index.scss';

const Select = ({ setOrderby, orderBy, option = [] }) => {
    const [value, setValue] = useState(orderBy || 'newest');
    const [isClickOutside] = useClickOutside('.seven-peaks-select-header');

    const options = useMemo(() => {
        if (option.length) {
            return option;
        }
        return [
            {
                value: 'newest',
                label: "Newest First"
            },
            {
                value: 'oldest',
                label: "Oldest First"
            },
        ]
    }, [option]);

    const findOptionLabel = useCallback(() => {
        let findOption = options.find(option => option.value === value);
        if (findOption) {
            return findOption.label;
        }
        return null;
    }, [options, value])

    const handleClick = useCallback((selectOptionValue, e) => {
        if (value === selectOptionValue) { return; }
        setOrderby(selectOptionValue);
        setValue(selectOptionValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div data-testid="sortable-select" className={`seven-peaks-select-wrapper ${isClickOutside === false ? 'expanded' : ''}`}>
            <div data-testid="sortable-header" className="seven-peaks-select-header">
                {findOptionLabel()}
                <img className="seven-peaks-select-header-icon" src={isClickOutside === false ? arrowUp : arrowDown} alt="select arrow icon" />
            </div>

            <ul className="seven-peaks-select-list">
                {options.map(option => (
                    <li onClick={(e) => handleClick(option.value, e)} key={option.value} className={`seven-peaks-select-list-item ${option.value === value ? 'ative' : ''}`} data-value={option.value}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Select);