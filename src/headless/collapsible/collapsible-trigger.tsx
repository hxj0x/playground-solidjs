import { Component, JSX, ValidComponent, splitProps } from "solid-js";
import * as Button from "../button";
import { PolymorphicProps } from "../polymorphic";
import { callHandler } from "../utils/events";
import { useCollapsibleContext } from "./collapsible-context";

export interface CollapsibleTriggerOptions {}

export interface CollapsibleTriggerCommonProps
  extends Button.ButtonRootCommonProps {
  ref: HTMLElement | ((el: HTMLElement) => void);
  onClick: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
}

export interface CollapsibleTriggerRenderProps
  extends CollapsibleTriggerCommonProps,
    Button.ButtonRootRenderProps {
  "aria-expanded": boolean;
  "aria-controls": string | undefined;
}

export type CollapsibleTriggerProps = CollapsibleTriggerOptions &
  Partial<CollapsibleTriggerCommonProps>;

/**
 * The button that expands/collapses the collapsible content.
 */
export function CollapsibleTrigger<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsibleTriggerProps>
) {
  const context = useCollapsibleContext();

  const [local, others] = splitProps(props, ["onClick"]);

  const onClick: JSX.EventHandlerUnion<HTMLElement, MouseEvent> = (e) => {
    callHandler(e, local.onClick);
    context.toggle();
  };

  return (
    <Button.Root<
      Component<
        Omit<CollapsibleTriggerRenderProps, keyof Button.ButtonRootRenderProps>
      >
    >
      aria-expanded={context.isOpen()}
      aria-controls={context.isOpen() ? context.contentId() : undefined}
      disabled={context.disabled()}
      onClick={onClick}
      {...context.dataset()}
      {...others}
    />
  );
}
