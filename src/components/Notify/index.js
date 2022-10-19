/**
 * External dependencies
 */
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */

import IconOn from "../../assets/images/bookmarkon-icon-2x.svg";
import IconOff from "../../assets/images/bookmarkoff-icon-2x.svg";

/**
 * Component style
 */
import './index.scss';

const Notify = ({ title = "", type }) => {
    const [show, setShow] = useState(false);



    useEffect(() => {
        if (type === "") { return; }

        setShow(true);
        setTimeout(() => {
            setShow(prev => !prev);
        }, 1000)

    }, [type]);

    let containerClass = [
        'seven-peaks-bookmark-toast',
        `seven-peaks-bookmark-toast-type-${type ? "success" : 'danger'}`,
        `seven-peaks-bookmark-toast-${show ? "show" : 'hide'}`
    ];

    let bookmarkIcon = IconOff;
    if (type) {
        bookmarkIcon = IconOn;
    }

    return (
        <div data-testid="bookmark-toast" className={containerClass.join(' ')}>
            <img className='seven-peaks-bookmark-toast-icon' src={bookmarkIcon} alt="Toast Icon" />
            {title}
        </div>
    )
}

export default Notify;