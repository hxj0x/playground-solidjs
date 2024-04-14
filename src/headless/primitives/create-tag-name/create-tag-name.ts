import { Accessor, Component, createEffect, createSignal } from "solid-js";
import { isString } from "../../utils/assertion";

/**
 * Returns the tag name by parsing an element ref.
 * @example
 * function Component(props) {
 *   let ref: HTMLDivElement | undefined;
 *   const tagName = createTagName(() => ref, () => "button"); // div
 *   return <div ref={ref} {...props} />;
 * }
 */
export function createTagName(
  ref: Accessor<HTMLElement | undefined>,
  fallback?: Accessor<string | Component | undefined>
) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));

  createEffect(() => {
    setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
  });

  return tagName;
}

function stringOrUndefined(value: any) {
  return isString(value) ? value : undefined;
}
