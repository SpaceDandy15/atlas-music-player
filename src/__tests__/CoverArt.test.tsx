import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import renderer from "react-test-renderer";

describe("CoverArt Component", () => {
  it("renders correctly with a provided src", () => {
    // Snapshot test for when a specific cover image URL is passed
    const tree = renderer
      .create(<CoverArt src="https://example.com/cover.jpg" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without a src (uses placeholder)", () => {
    // Snapshot test for fallback scenario when no src is provided
    const tree = renderer.create(<CoverArt />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
