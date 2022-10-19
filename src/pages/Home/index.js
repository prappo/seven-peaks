/**
 * External dependencies
 */
import { useState, useCallback, memo } from 'react';

/**
 * Internal dependencies
 */
import SortBookmarkSection from "../../layouts/Bookmark";
import Articles from "../../layouts/Articles";
import { SectionHeader, Spacer, Select, Loader, Card } from "../../components";
import { useApi, useTitle } from "../../libs/hooks";
import apiEndpoints from '../../libs/api-endpoints';

const Home = () => {
    useTitle('Home page')
    const [queryParams, setQueryParams] = useState({
        'order-by': 'newest'
    });
    const params = (new URLSearchParams(queryParams)).toString();

    const [topNewsResults, topNewsLoading, , resetResult] = useApi(apiEndpoints.topNews + '&' + params); // Api request for top news
    const [sportResults, sportLoading, , sportsResetResult] = useApi(apiEndpoints.sports + '&' + params); // Api request for sports


    const handleOrderBy = useCallback((value) => {
        resetResult(); // if orderby value get updated, then reset the old results
        sportsResetResult(); // if orderby value get updated, then reset the old results
        setQueryParams((prevState => (
            {
                ...prevState,
                'order-by': value
            }
        ))); // Managing state for orderby
    }, [resetResult, sportsResetResult])

    // This loader until we get the results
    if (topNewsLoading === true || sportLoading === true) {
        return <Loader />
    }

    return (
        <div className="container">
            {/* Top Heade section with title and sort and bookmark button */}
            <SortBookmarkSection title="Top stories">
                {/* By handleOrderBy, we getting the selected value, to call the api again for latest articles */}
                <Select setOrderby={handleOrderBy} orderBy={queryParams['order-by']} />
            </SortBookmarkSection>

            {/* Top news article list. Since there is special grid, I have added a class top-news and only 5 items*/}
            <Articles className="top-news" column="column-4" result={topNewsResults.slice(0, 5)}>{(item, index) => (
                <Card content={item} showTrailText={index === 0} size={index > 0 ? "small" : "large"} />
            )}</Articles>

            {/* Space between topnews */}
            <Spacer size="30" />

            {/* Rest Top news article list */}
            <Articles column="column-3 column-md-2" result={topNewsResults.slice(5)} />

            {/* Section Heading */}
            <SectionHeader title="Sports" />

            {/* Sports article list */}
            <Articles result={sportResults} column="column-3 column-md-2" />

            {/* Spaces */}
            <Spacer size="105" />
        </div>
    )
}

export default memo(Home);