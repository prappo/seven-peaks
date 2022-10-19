/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

/**
 * Internal dependencies
 */

// Layouts
import SortBookmarkSection from "../../layouts/Bookmark";
import Articles from "../../layouts/Articles";

// Components
import { Spacer, Loader, Select } from "../../components";

// Libs
import { useObserver, useApi, useTitle } from '../../libs/hooks';
import apiEndpoints from '../../libs/api-endpoints';

const SearchResult = () => {
    const [queryParams, setQueryParams] = useState({
        'order-by': 'newest',
        'page': 1
    });

    let pageTitle = 'Search results';
    useTitle(pageTitle);

    const params = new URLSearchParams(queryParams);
    const { query } = useParams();
    const [result, loading, hasMore, resetResult] = useApi(apiEndpoints.search + '&' + params.toString());
    const { loadData, lastElement } = useObserver(loading, hasMore);


    useEffect(() => {
        resetResult();

        setQueryParams(prevState => (
            {
                ...prevState,
                'q': query || '',
                'page': 1
            }
        ));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

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
        <div className="container">
            <SortBookmarkSection title="Search Results"><Select orderBy={queryParams['order-by']} setOrderby={handleOrderBy} /></SortBookmarkSection>

            <Articles ref={lastElement} result={result} column="column-3 column-md-2" />

            {loading === true && queryParams.page > 1 ? <Loader size="small" /> : ''}

            <Spacer size="105" />
        </div>
    )
}

export default SearchResult;