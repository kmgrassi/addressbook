import React from "react";

import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import { useGetRandomUserData } from "./context/useGetRandomData";
import { renderHook } from "@testing-library/react-hooks";
import { createWrapper, renderWithClient } from "./tests/utils";

describe("test", () => {
  test("successful query component", async () => {
    const result = renderWithClient(<App />);

    expect(await result.findByText("sadfasd")).toBeInTheDocument();
  });

  it("renders learn react link", async () => {
    const { result, waitFor } = renderHook(() => useGetRandomUserData(), {
      wrapper: createWrapper()
    });

    await waitFor(() => {
      if (result) {
        console.log(result.current);
      }
    });

    // expect(result.current.data).toBeDefined();
  });
});
