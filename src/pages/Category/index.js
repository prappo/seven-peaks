/**
 * External dependencies
 */
import { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";

/**
 * Internal dependencies
 */
import SortBookmarkSection from "../../layouts/Bookmark";
import Articles from "../../layouts/Articles";
import { Spacer, Select, Loader } from "../../components";
import { useApi, useObserver, useTitle } from "../../libs/hooks";
import apiEndpoints from '../../libs/api-endpoints';

const Category = () => {

    const { name } = useParams();
    useTitle(name);

    const [queryParams, setQueryParams] = useState({
        'order-by': 'newest',
        'page': 1,
        'section': name
    });

    const params = new URLSearchParams(queryParams);

    const [result, loading, hasMore, resetResult] = useApi(apiEndpoints.category + '&' + params.toString());
    const { loadData, lastElement } = useObserver(loading, hasMore);


    useEffect(() => {
        resetResult();

        setQueryParams(prevState => (
            {
                ...prevState,
                'section': name,
                'page': 1
            }
        ));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

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
            <SortBookmarkSection title={name}><Select orderBy={queryParams['order-by']} setOrderby={handleOrderBy} /></SortBookmarkSection>

            <Articles ref={lastElement} result={result} column="column-3 column-md-2" />

            {loading === true && queryParams.page > 1 ? <Loader size="small" /> : ''}

            <Spacer size="105" />
        </div>
    )
}

export default Category;