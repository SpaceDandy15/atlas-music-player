import React from "react";
import renderer from "react-test-renderer";
import { describe, it, expect } from "vitest";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls Component", () => {
  it("renders correctly with default volume", () => {
    // Snapshot test ensures component renders properly with a given volume
    const tree = renderer
      .create(<VolumeControls volume={50} setVolume={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly at volume 0", () => {
    // Snapshot test checks edge case where volume is at minimum
    const tree = renderer
      .create(<VolumeControls volume={0} setVolume={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly at volume 100", () => {
    // Snapshot test checks edge case where volume is at maximum
    const tree = renderer
      .create(<VolumeControls volume={100} setVolume={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
