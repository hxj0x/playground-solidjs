import {
  Accessor,
  ValidComponent,
  createMemo,
  createSignal,
  createUniqueId,
  splitProps,
} from "solid-js";
import { Polymorphic, PolymorphicProps } from "../polymorphic";
import { createDisclosureState } from "../primitives/create-disclosure-state/create-disclosure-state";
import { createRegisterId } from "../primitives/create-register-id";
import { createGenerateId } from "../utils/create-generate-id";
import { mergeDefaultProps } from "../utils/props";
import {
  CollapsibleContext,
  CollapsibleContextValue,
  CollapsibleDataSet,
} from "./collapsible-context";

/**
 * 折叠面板Root选项
 */
export interface CollapsibleRootOptions {
  /** The controlled open state of the collapsible. */
  open?: boolean;

  /**
   * The default open state when initially rendered.
   * Useful when you do not need to control the open state.
   */
  defaultOpen?: boolean;

  /** Event handler called when the open state of the collapsible changes. */
  onOpenChange?: (isOpen: boolean) => void;

  /** Whether the collapsible is disabled. */
  disabled?: boolean;

  /**
   * Used to force mounting the collapsible content when more control is needed.
   * Useful when controlling animation with SolidJS animation libraries.
   */
  forceMount?: boolean;
}

/**
 * 折叠面板Root通用属性
 */
export interface CollapsibleRootCommonProps {
  id: string;
}

/**
 * 折叠面板Root渲染属性
 */
export interface CollapsibleRootRenderProps
  extends CollapsibleRootCommonProps,
    CollapsibleDataSet {}

/**
 * 折叠面板Root属性
 */
export type CollapsibleRootProps = CollapsibleRootOptions &
  Partial<CollapsibleRootCommonProps>;

/**
 * An interactive component which expands/collapses a content.
 */
export function CollapsibleRoot<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsibleRootProps>
) {
  const defaultId = `collapsible-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps(
    { id: defaultId },
    props as CollapsibleRootProps
  );
  const [local, others] = splitProps(mergedProps, [
    "open",
    "defaultOpen",
    "onOpenChange",
    "disabled",
    "forceMount",
  ]);

  const [contentId, setContentId] = createSignal<string>();

  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => local.onOpenChange?.(isOpen),
  });

  const dataset: Accessor<CollapsibleDataSet> = createMemo(() => ({
    "data-expanded": disclosureState.isOpen() ? "" : undefined,
    "data-closed": !disclosureState.isOpen() ? "" : undefined,
    "data-disabled": local.disabled ? "" : undefined,
  }));

  const context: CollapsibleContextValue = {
    dataset,
    isOpen: disclosureState.isOpen,
    disabled: () => local.disabled ?? false,
    shouldMount: () => local.forceMount || disclosureState.isOpen(),
    contentId,
    toggle: disclosureState.toggle,
    generateId: createGenerateId(() => others.id!),
    registerContentId: createRegisterId(setContentId),
  };

  return (
    <CollapsibleContext.Provider value={context}>
      <Polymorphic<CollapsibleRootRenderProps>
        as="div"
        {...dataset()}
        // 类型推断有点奇怪 ↑
        {...(others as { id: string })}
      />
    </CollapsibleContext.Provider>
  );
}
