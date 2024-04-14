import { mergeProps } from "solid-js";

/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export type OverrideProps<Source = {}, Override = {}> = Omit<
  Source,
  keyof Override
> &
  Override;

/** 合并默认属性 */
export function mergeDefaultProps<T extends Record<string, any>>(
  defaultProps: Partial<T>,
  props: T
): T {
  return mergeProps(defaultProps, props);
}
