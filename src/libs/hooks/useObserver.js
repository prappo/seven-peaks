import { useRef, useState, useCallback } from 'react';

const useObserver = (loading, hasMore) => {
    const [loadData, setData] = useState(false);

    const observer = useRef()

    if (!hasMore) {
        if (observer.current) {

            observer.current.disconnect();
        }
    }

    const lastElement = useCallback((element) => {

        if (loading) { return; }
        setData(false)

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setData(true)
            }
        }, { threshold: 1 });

        if (element) {
            observer.current.observe(element)
        }
    }, [loading, hasMore]);

    return { loadData, lastElement }
}

export default useObserver;