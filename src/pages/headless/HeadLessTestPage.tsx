import { Polymorphic } from "../../headless/polymorphic";

export const HeadlessTestPage = () => {
  return (
    <>
      <Polymorphic
        style={{ "background-color": "red" }}
        as="button"
        type="button"
      >
        Click me
      </Polymorphic>
    </>
  );
};
