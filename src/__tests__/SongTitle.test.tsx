import React from "react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";
import SongTitle from "../components/SongTitle";

describe("SongTitle Component", () => {
  it("renders correctly with default props", () => {
    // Snapshot test to ensure the component renders correctly with default title and artist
    const tree = renderer.create(<SongTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom title and artist", () => {
    // Snapshot test to ensure that passing props updates the rendered output
    const tree = renderer
      .create(<SongTitle title="Custom Song" artist="Custom Artist" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
