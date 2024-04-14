import { mergeRefs } from "@solid-primitives/refs";
import { ValidComponent, createMemo, splitProps } from "solid-js";
import { Polymorphic, PolymorphicProps } from "../polymorphic";
import { createTagName } from "../primitives/create-tag-name/create-tag-name";
import { mergeDefaultProps } from "../utils/props";
import { isButton } from "./is-button";

export interface ButtonRootOptions {}

export interface ButtonRootCommonProps {
  /** Whether the button is disabled. */
  disabled: boolean | undefined;
  type: "submit" | "reset" | "button" | undefined;
  ref: HTMLElement | ((el: HTMLElement) => void);
  tabIndex: number | undefined;
}

export interface ButtonRootRenderProps extends ButtonRootCommonProps {
  role: "button" | undefined;
  "aria-disabled": boolean | undefined;
  "data-disabled": string | undefined;
}

export type ButtonRootProps = ButtonRootOptions &
  Partial<ButtonRootCommonProps>;

export function ButtonRoot<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonRootProps>
) {
  let ref: HTMLElement | undefined;

  const mergedProps = mergeDefaultProps(
    { type: "button" },
    props as ButtonRootProps
  );

  const [local, others] = splitProps(mergedProps, ["ref", "type", "disabled"]);

  const tagName = createTagName(
    () => ref,
    () => "button"
  );

  const isNativeButton = createMemo(() => {
    const elementTagName = tagName();

    if (elementTagName == null) {
      return false;
    }

    return isButton({ tagName: elementTagName, type: local.type });
  });

  const isNativeInput = createMemo(() => {
    return tagName() === "input";
  });

  const isNativeLink = createMemo(() => {
    return tagName() === "a" && ref?.getAttribute("href") != null;
  });

  return (
    <Polymorphic<ButtonRootRenderProps>
      as="button"
      ref={mergeRefs((el) => (ref = el), local.ref)}
      type={isNativeButton() || isNativeInput() ? local.type : undefined}
      role={!isNativeButton() && !isNativeLink() ? "button" : undefined}
      tabIndex={
        !isNativeButton() && !isNativeLink() && !local.disabled ? 0 : undefined
      }
      disabled={
        isNativeButton() || isNativeInput() ? local.disabled : undefined
      }
      aria-disabled={
        !isNativeButton() && !isNativeInput() && local.disabled
          ? true
          : undefined
      }
      data-disabled={local.disabled ? "" : undefined}
      {...others}
    />
  );
}
