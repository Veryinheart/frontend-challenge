import { useState, useEffect } from "react";
import { getPosts } from "../api/axios";

import { Post } from "../typings/types";

const usePosts = (pageNumber = 1) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{ message: string } | null>();
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

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
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: error.message });
      });

    //clean up the request
    return () => controller.abort();
  }, [pageNumber]);

  return { posts, isLoading, isError, error, hasNextPage };
};

export default usePosts;
