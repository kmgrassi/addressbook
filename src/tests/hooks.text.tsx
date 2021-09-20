import { rest } from "msw";

import { renderHook } from "@testing-library/react-hooks";
import { server } from "../setupTests";
import { createWrapper } from "./utils";

import { useGetRandomUserData } from "../context/useGetRandomData";

describe("query hook", () => {
  test("successful query hook", async () => {
    const { result, waitFor } = renderHook(() => useGetRandomUserData(), {
      wrapper: createWrapper()
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.name).toBe("contactList");
  });

  test("failure query hook", async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result, waitFor } = renderHook(() => useGetRandomUserData(), {
      wrapper: createWrapper()
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
