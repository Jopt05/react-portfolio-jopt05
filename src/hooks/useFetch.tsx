import axios from 'axios';
import {useEffect, useState, useRef} from 'react';

interface UseFetchProps {
    url: string;
    method: 'get' | 'post';
    body?: any
}

interface UseFetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetch = <T,>({ url, method }: UseFetchProps): UseFetchState<T> => {
  const isMounted = useRef(true);
  const [state, setState] = useState<UseFetchState<T>>({data: null, loading: true, error: null});

  const handlePost = (body: any) => {
    setState({
      ...state,
      loading: true
    })
    axios({
      method: 'post',
      url
    })
      .then((response) => {
        setState({
          data: response.data,
          error: null,
          loading: false
        })
      })
      .catch((error) => {
          console.log({error});
          setState({
              data: null,
              loading: false,
              error: 'There was a problem loading the information'
          })
      });
  }

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({data: null, loading: true, error: null});
    if( method == 'get' ) {
        axios({
            method,
            url
        })
            .then((response) => {
                setState({
                    data: response.data,
                    error: null,
                    loading: false
                })
            })
            .catch((error) => {
                console.log({error});
                setState({
                    data: null,
                    loading: false,
                    error: 'There was a problem loading the information'
                })
            });
    } else {
      setState({
        ...state,
        loading: false
      })
    }
  }, [url]);

  return state;
};

export default useFetch;