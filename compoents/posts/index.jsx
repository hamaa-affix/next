// @ts-nocheck
import { useState, useCallback, useEffect } from "react";

export const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      if(!res.ok) {
        throw new Error("エラーが発生した為、データの取得に失敗しました");
      }
      setPosts(json);
    } catch(error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
      getPosts();
  }, [getPosts])

  if(isLoading) {
    return <div>ローディング中です</div>
  }

  if(error) {
    return <div>{error.message}</div>
  }

  if(posts.length === 0) {
    return <div>データは空です</div>
  }
  return (
    <ol>
      {posts.map(post => {
        return (
          <li key={post.id}>{post.title}</li>
        );
      })}
    </ol>
  );
}
