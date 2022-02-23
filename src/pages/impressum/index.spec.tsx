/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { Impressum } from "./";

describe("Impressum", () => {
  it("renders a heading", () => {
    render(<Impressum />);
    const heading = screen.getByRole("heading", { name: /Impressum/i });
    expect(heading).toBeInTheDocument();
  });
});
