import { As, Polymorphic } from "../../headless/polymorphic";

export const HeadlessTestPage = () => {
  return (
    <>
      <Polymorphic as="div" style={{ "background-color": "red" }} asChild>
        <As component="button" type="button" style={undefined}>
          Click me
        </As>
      </Polymorphic>
    </>
  );
};
