import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import mockData from "../../../tests/mockData.json";
import { ContactList } from "../ContactList";

describe("renders contact list", () => {
  test("renders first contact", async () => {
    const result = render(
      <Router>
        <ContactList contactList={mockData} isLoading={false} />
      </Router>
    );

    expect(await result.findByText("Mr. Vinnie Burema")).toBeInTheDocument();
  });

  test("render all contacts", async () => {
    const result = render(
      <Router>
        <ContactList contactList={mockData} isLoading={false} />
      </Router>
    );

    const contacts = result.getAllByRole("link");
    expect(contacts.length === 500);
  });

  test("renders loading spinner", async () => {
    const result = render(
      <Router>
        <ContactList contactList={null} isLoading={true} />
      </Router>
    );

    const spinner = result.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
