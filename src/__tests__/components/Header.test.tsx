import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header component test", () => {
  test("renders header", () => {
    render(<Header />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Frontend Challenge");
  });
});
