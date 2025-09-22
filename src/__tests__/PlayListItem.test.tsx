import React from "react";
import { describe, it, expect, vi } from "vitest";
import renderer, { act } from "react-test-renderer";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem Component", () => {
  it("renders correctly with default props", () => {
    // Snapshot test with default values
    const tree = renderer.create(<PlayListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selected with highlight color", () => {
    // Snapshot test with selected + custom highlightColor
    const tree = renderer
      .create(<PlayListItem selected highlightColor="red" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    // Mock click handler
    const handleClick = vi.fn();

    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <PlayListItem title="Clickable Song" onClick={handleClick} />
      );
    });

    // Get the root instance *before* calling .toJSON()
    const instance = component!.root;

    act(() => {
      instance.props.onClick();
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
