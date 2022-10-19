import { useEffect, useReducer } from "react"

const initialValues = {
    result: [],
    loading: true,
    error: null,
    hasMore: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_RESULT":
            return {
                ...state,
                loading: false,
                hasMore: action.hasMore,
                result: [...new Set([...state.result, ...action.value])]
            }
        case "RESET_RESULT":
            return {
                ...state,
                hasMore: false,
                result: []
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.value
            }
        case "SET_ERROR":
            return {
                ...state,
                loading: false,
                error: action.value
            }
        default: return state;
    }
}

const useApi = (url, config = {}) => {
    const [state, dispatch] = useReducer(reducer, initialValues)

    const resetResult = () => {
        dispatch({
            type: 'RESET_RESULT'
        });
    }

    useEffect(() => {
        if (!url) { console.warn("useApi hook is required URL, which is missing"); return; }

        dispatch({
            type: 'SET_LOADING',
            value: true
        });

        const controller = new AbortController(),
            signal = controller.signal;

        fetch(url, { signal, ...config })
            .then((res) => res.json())
            .then((res) => {


                dispatch({
                    type: 'SET_RESULT',
                    value: res.response.results,
                    hasMore: res.response.pages > 1
                });
            })
            .catch(error => {
                if (error.name === 'AbortError') { return; }
                dispatch({
                    type: 'SET_ERROR',
                    value: error.message,
                    hasMore: false
                });

            });

        return () => controller.abort();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return [state.result, state.loading, state.hasMore, resetResult, state.error]
}

export default useApi;