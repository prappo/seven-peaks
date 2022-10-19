import { useEffect, useCallback, useState } from "react";

const useClickOutside = (selector) => {
    const [clickOutside, setClickOutside] = useState('');

    const handleClickOutside = useCallback((e) => {
        if (!selector) { console.warn("ClickOutside hook selector argument missing"); return; }

        let isFindTargetElement = e.target.closest(selector);

        if (isFindTargetElement == null) {
            setClickOutside(true)
        } else {
            setClickOutside(false)
        }
    }, [selector]);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, [handleClickOutside]);

    return [clickOutside];
}

export default useClickOutside;