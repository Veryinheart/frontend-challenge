import { useState, useEffect } from "react";
import { getPost } from "../api/axios";

const usePostDetail = (id: number) => {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setError({});

    getPost(id)
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        setError({ message: e.message });
      });
  }, [id]);

  return { post, isLoading, error, isError };
};

export default usePostDetail;
