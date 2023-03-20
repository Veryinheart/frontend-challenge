import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPostsList, getPost, api } from "../../api/api";

jest.mock("axios");

describe("api test", () => {
  describe("getPostsList", () => {
    const mock = new MockAdapter(axios);

    afterEach(() => {
      mock.reset();
    });

    it("fetches a list of posts", async () => {
      const responseData = [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
      ];
      mock
        .onGet("https://jsonplaceholder.typicode.com/posts?_page=1")
        .reply(200, responseData);

      const data = await getPostsList();
      expect(data[0]).toEqual(responseData[0]);
      expect(data[1]).toEqual(responseData[1]);
    });

    it("fetches a list of posts with a custom page number", async () => {
      const responseData = [
        {
          userId: 2,
          id: 11,
          title: "et ea vero quia laudantium autem",
          body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
        },
        {
          userId: 2,
          id: 12,
          title: "in quibusdam tempore odit est dolorem",
          body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
        },
      ];
      mock
        .onGet("https://jsonplaceholder.typicode.com/posts?_page=2")
        .reply(200, responseData);

      const data = await getPostsList(2);
      expect(data[0]).toEqual(responseData[0]);
      expect(data[1]).toEqual(responseData[1]);
    });
  });
});
