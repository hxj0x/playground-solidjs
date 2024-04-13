import { combineProps as baseCombineProps } from "@solid-primitives/props";
import {
  Accessor,
  ComponentProps,
  For,
  JSX,
  Show,
  ValidComponent,
  children,
  splitProps,
} from "solid-js";
import { Dynamic, DynamicProps } from "solid-js/web";

export interface AsChildProp {
  /** 尽可能不用这个属性 Whether the component should render as its direct `As` child component. */
  asChild?: boolean;

  /** The component to render when `children` doesn't contain any `<As>` component as direct child. */
  as?: ValidComponent;
}

export type PolymorphicProps<
  T extends ValidComponent,
  P = ComponentProps<T>
> = {
  [K in keyof P]: P[K];
} & AsChildProp;

/**
 * A utility component that render either a direct `<As>` child or its `as` prop.
 */
export function Polymorphic<T extends ValidComponent>(
  props: PolymorphicProps<T>
) {
  const [local, others] = splitProps(
    props as PolymorphicProps<ValidComponent>,
    ["asChild", "as", "children"]
  );

  // Prevent the extra computation below when "as child" polymorphism is not needed.
  if (!local.asChild) {
    return (
      <Dynamic component={local.as} {...others}>
        {local.children}
      </Dynamic>
    );
  }

  const resolvedChildren = children(() => local.children) as Accessor<any>;

  // Single child is `As`.
  if (isAs(resolvedChildren())) {
    const combinedProps = combineProps(others, resolvedChildren()?.props ?? {});
    return <Dynamic {...(combinedProps as any)} />;
  }

  // Multiple children, find an `As` if any.
  if (Array.isArray(resolvedChildren())) {
    const newElement = resolvedChildren().find(isAs);

    if (newElement) {
      // because the new element will be the one rendered, we are only interested
      // in grabbing its children (`newElement.props.children`)
      const newChildren = () => (
        <For each={resolvedChildren()}>
          {(child: any) => (
            <Show when={child === newElement} fallback={child}>
              {newElement.props.children}
            </Show>
          )}
        </For>
      );

      const combinedProps = combineProps(others, newElement?.props ?? {});

      return <Dynamic {...(combinedProps as any)}>{newChildren}</Dynamic>;
    }
  }

  throw new Error(
    "[kobalte]: Component is expected to render `asChild` but no children `As` component was found."
  );
}

/**
 * A utility component used to delegate rendering of its `Polymorphic` parent component.
 */
export function As<T extends ValidComponent>(props: DynamicProps<T>) {
  return {
    [AS_COMPONENT_SYMBOL]: true,
    props,
  } as unknown as JSX.Element;
}

const AS_COMPONENT_SYMBOL = Symbol("$$KobalteAsComponent");
function isAs(component: any): boolean {
  return component?.[AS_COMPONENT_SYMBOL] === true;
}

function combineProps(baseProps: any, overrideProps: any) {
  return baseCombineProps([baseProps, overrideProps], {
    reverseEventHandlers: true,
  }) as any;
}