import { useState, useEffect } from "react";
import { getPost } from "../api/api";
import { Post } from "../typings/types";

const usePostDetail = (id: string) => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{ message: string } | null>();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

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
