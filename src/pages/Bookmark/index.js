/**
 * External dependencies
 */
import { useEffect, useState, useCallback } from 'react';

/**
 * Internal dependencies
 */
import SortBookmarkSection from "../../layouts/Bookmark";
import Articles from "../../layouts/Articles";
import { Spacer, Select, Loader } from "../../components";
import { useApi, useObserver, useTitle } from "../../libs/hooks";
import apiEndpoints from '../../libs/api-endpoints';

/**
 * Page style
 */
import './index.scss';

const Bookmark = () => {
    useTitle('Bookmarks');
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const [queryParams, setQueryParams] = useState({
        'order-by': 'newest',
        'page': 1,
        'ids': bookmarks.join(',')
    });
    const params = new URLSearchParams(queryParams);

    const [result, loading, hasMore, resetResult] = useApi(apiEndpoints.bookmark + '&' + params.toString());
    const { loadData, lastElement } = useObserver(loading, hasMore);

    useEffect(() => {
        if (loadData === true) {
            setQueryParams(prevState => (
                {
                    ...prevState,
                    'page': prevState.page++
                }
            ));
        }
    }, [loadData]);

    const handleOrderBy = useCallback((value) => {
        resetResult();
        setQueryParams(prevState => (
            {
                ...prevState,
                'order-by': value,
                'page': 1
            }
        ));
    }, [resetResult])

    if (loading === true && queryParams.page === 1) {
        return <Loader />
    }

    return (
        <div className="container seven-peaks-bookmark-page">
            <SortBookmarkSection title={"All Bookmarks"}><Select orderBy={queryParams['order-by']} setOrderby={handleOrderBy} /></SortBookmarkSection>

            <Articles ref={lastElement} result={result} column="column-3 column-md-2" />

            {loading === true && queryParams.page > 1 ? <Loader size="small" /> : ''}

            <Spacer size="105" />
        </div>
    )
}

export default Bookmark;