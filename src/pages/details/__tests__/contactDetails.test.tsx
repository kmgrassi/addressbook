import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import mockData from "../../../tests/mockData.json";
import ContactDetails from "../ContactDetails";

describe("renders contact details", () => {
  test("renders first contact", async () => {
    const result = render(
      <MemoryRouter initialEntries={["/0"]}>
        <Route path="/:index">
          <ContactDetails contactList={mockData} isLoading={false} />
        </Route>
      </MemoryRouter>
    );

    expect(await result.findByText("Mr. Vinnie Burema")).toBeInTheDocument();
  });
});
