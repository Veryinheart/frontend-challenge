import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import usePostDetail from "../../hooks/usePostDetail";
const axios = require("axios");

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result } = renderHook(() => usePostDetail("1"));

  //await waitForNextUpdate();

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