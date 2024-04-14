import { render } from "@solidjs/testing-library";
import { expect } from "vitest";

import { Polymorphic } from "./polymorphic";

describe("Polymorphic", () => {
  it("should render the 'as' string prop", () => {
    const { getByTestId } = render(() => (
      <Polymorphic data-testid="polymorphic" as="div">
        Button
      </Polymorphic>
    ));

    const polymorphic = getByTestId("polymorphic");

    expect(polymorphic).toBeInstanceOf(HTMLDivElement);
  });

  it("should render the 'as' custom component prop", () => {
    const CustomButton = (props: any) => (
      <button
        id="custom"
        type="button"
        {...props}
        style={{ "background-color": "red" }}
      />
    );

    const { getByTestId } = render(() => (
      <Polymorphic data-testid="polymorphic" as={CustomButton}>
        Button
      </Polymorphic>
    ));

    const polymorphic = getByTestId("polymorphic");

    expect(polymorphic).toBeInstanceOf(HTMLButtonElement);
    expect(polymorphic).toHaveAttribute("id", "custom");
    // fixme bug
    // expect(polymorphic).toHaveStyle("background-color: red");
  });
});
