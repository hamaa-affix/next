// @ts-nocheck
import { useCallback, useEffect, useReducer, useState } from "react";
import Link from "next/link";

const initialState = {
    data: [],
    loading: true,
    error: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      throw new Error("no such action type!")
  }
}

export const Posts = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  //const [posts, setPosts] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      if(!res.ok) {
        throw new Error("エラーが発生した為、データの取得に失敗しました");
      }
      dispatch({
        type: "end",
        data: json
      })
    } catch(error) {
      dispatch({
        type: "error",
        error: error
      });
    }
    //setIsLoading(false);
  }, []);

  useEffect(() => {
      getPosts();
  }, [getPosts])

  if(state.loading) {
    return <div>ローディング中です</div>
  }

  if(state.error) {
    return <div>{error.message}</div>
  }

  if(state.length === 0) {
    return <div>データは空です</div>
  }
  return (
    <ol>
      {state.data.map(post => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
