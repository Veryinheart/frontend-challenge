import { useState, useEffect } from "react";
import { getPosts } from "../api/axios";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const usePosts = (pageNumber = 1) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getPosts(pageNumber, { signal })
      .then((data) => {
        setPosts((pre) => [...pre, ...data]);
        setHasNextPage(Boolean(data.length));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        //if the error is aborted error, return null
        if (signal.aborted) return null;
        setIsError(true);
        setError({ message: error.message });
      });

    //clean up the request
    return () => controller.abort();
  }, [pageNumber]);

  return { posts, isLoading, isError, error, hasNextPage };
};

export default usePosts;
