import { renderHook, act, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useAPI from "../../hooks/useAPI";

// please ignore this file, it's not relevant with the project.

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Daniel" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() => {
    expect(result.current).toEqual({ name: "Daniel" });
  });

  //await waitForNextUpdate();
  //expect(result.current).toEqual({ name: "Jack" });
});
