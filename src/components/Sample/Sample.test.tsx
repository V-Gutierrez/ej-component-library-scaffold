import '@testing-library/jest-dom'

import { Sample, SampleProps } from "./Sample";
import { render, screen } from '@testing-library/react'

import React from "react";

describe("Sample Component", () => {
  test("should render correctly based on props", () => {
    const props: SampleProps = {
      tester: "Guti",
      color: "green"
    }

    render(<Sample {...props} />)

    const headingTag = screen.getByTestId('sample__heading')

    expect(headingTag).toHaveStyle({ color: "green" });
    expect(headingTag).toHaveTextContent("Hello world, Guti");
  });
});