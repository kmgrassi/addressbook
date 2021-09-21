import { render } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("home page renders", () => {
  test("home page header render", async () => {
    const result = render(<App />);

    const title = await result.findByText("Address book");
    const search = await result.findByLabelText("Search contacts");

    expect(title).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
});
