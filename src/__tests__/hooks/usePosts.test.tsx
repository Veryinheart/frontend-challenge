import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import usePostDetail from "../../hooks/usePostDetail";

describe("usePostDetail test", () => {
  test("testing usePostDetail", async () => {
    // const { result, waitForNextUpdate } = renderHook(() => usePostDetail("1"));
    // await waitForNextUpdate();

    const { result } = renderHook(() => usePostDetail("1"));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    await waitFor(() => {
      expect(result.current.post).toEqual({
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      });
    });
  });
});

// afterEach(() => {
//   mockAxios.reset();
// });

// it("should fetch posts and update state", async () => {
//   const data = [
//     { id: 1, title: "Post 1" },
//     { id: 2, title: "Post 2" },
//   ];

//   // Set up the mock response for the getPosts function
//   mockAxios.onGet("/posts/1").reply(200, data);

//   // Render the hook
//   const { result, waitForNextUpdate } = renderHook(() => usePosts(1));

//   // Make sure that the initial state is set correctly
//   expect(result.current.posts).toEqual([]);
//   expect(result.current.isLoading).toBe(true);
//   expect(result.current.isError).toBe(false);
//   expect(result.current.error).toBe(null);
//   expect(result.current.hasNextPage).toBe(false);

//   // Wait for the hook to finish fetching data
//   await waitForNextUpdate();

//   // Make assertions on the returned data
//   expect(result.current.posts).toEqual(data);
//   expect(result.current.isLoading).toBe(false);
//   expect(result.current.isError).toBe(false);
//   expect(result.current.error).toBe(null);
//   expect(result.current.hasNextPage).toBe(true);
// });
