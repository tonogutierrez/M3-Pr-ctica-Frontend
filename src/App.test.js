import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders the welcome message", () => {
  render(<App />);
  const headingElement = screen.getByText(/Bienvenido a Best Run Travel/i);
  expect(headingElement).toBeInTheDocument();
});
