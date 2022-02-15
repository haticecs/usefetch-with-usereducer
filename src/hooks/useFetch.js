import { useEffect, useReducer } from "react";
import fetchReducer from "../reducers/fetchReducer";

const useFetch = (url = "", initialData = []) => {
  const initialState = {
    data: initialData,
    isLoading: false,
    isError: false,
  };

  // call useReducer with reducer function.
  // call dispatch function to set the state with the action type
  // change action type accordingly.
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // if component is unmounted during the fetch for any reason, don't set the states.
    let isMounted = true;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: json });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
};

export default useFetch;
