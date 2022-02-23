/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { Datenschutz } from "./";

describe("Datenschutz", () => {
  it("renders a heading", () => {
    render(<Datenschutz />);
    const heading = screen.getByRole("heading", { name: /Datenschutz/i });
    expect(heading).toBeInTheDocument();
  });
});
