import { renderHook, act } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import useAPI from "../../hooks/useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result } = renderHook(() => useAPI());

  //   await waitForNextUpdate();
  //   act(() => {
  //     result.current.name
  //   });

  expect(result.current).toEqual({ name: "Jack" });
});
