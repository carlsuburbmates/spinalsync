import React from "react";
import LearnCard from "../LearnCard";
import { render, screen } from "@testing-library/react";

describe("LearnCard", () => {
  it("renders title and body", () => {
    render(<LearnCard title="Test Title" body="Test Body" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Body")).toBeInTheDocument();
  });
});
