import { mergeRefs } from "@solid-primitives/refs";
import {
  JSX,
  ValidComponent,
  createSignal,
  createUniqueId,
  splitProps,
} from "solid-js";
import { createListState, createSelectableList } from "../list";
import { Polymorphic, PolymorphicProps } from "../polymorphic";
import { CollectionItemWithRef } from "../primitives/create-collection";
import { createDomCollection } from "../primitives/create-dom-collection/create-dom-collection";
import { createGenerateId } from "../utils/create-generate-id";
import { composeEventHandlers } from "../utils/events";
import { mergeDefaultProps } from "../utils/props";
import { AccordionContext, AccordionContextValue } from "./accordion-context";

export interface AccordionRootOptions {
  /** The controlled value of the accordion item(s) to expand. */
  value?: string[];

  /**
   * The value of the accordion item(s) to expand when initially rendered.
   * Useful when you do not need to control the state.
   */
  defaultValue?: string[];

  /** Event handler called when the value changes. */
  onChange?: (value: string[]) => void;

  /** Whether multiple items can be opened at the same time. */
  multiple?: boolean;

  /** When `multiple` is `false`, allows closing content when clicking trigger for an open item. */
  collapsible?: boolean;

  /** Whether focus should wrap around when the end/start is reached. */
  shouldFocusWrap?: boolean;
}

export interface AccordionRootCommonProps {
  id: string;
  ref: HTMLElement | ((el: HTMLElement) => void);
  onKeyDown: JSX.EventHandlerUnion<HTMLElement, KeyboardEvent>;
  onMouseDown: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
  onFocusIn: JSX.EventHandlerUnion<HTMLElement, FocusEvent>;
  onFocusOut: JSX.EventHandlerUnion<HTMLElement, FocusEvent>;
}

export interface AccordionRootRenderProps extends AccordionRootCommonProps {}

export type AccordionRootProps = AccordionRootOptions &
  Partial<AccordionRootCommonProps>;

/**
 * A vertically stacked set of interactive headings that each reveal an associated section of content.
 */
export function AccordionRoot<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionRootProps>
) {
  let ref: HTMLElement | undefined;

  const defaultId = `accordion-${createUniqueId()}`;

  const mergedProps = mergeDefaultProps(
    {
      id: defaultId,
      multiple: false,
      collapsible: false,
      shouldFocusWrap: true,
    },
    props as AccordionRootProps
  );

  const [local, others] = splitProps(mergedProps, [
    "id",
    "ref",
    "value",
    "defaultValue",
    "onChange",
    "multiple",
    "collapsible",
    "shouldFocusWrap",
    "onKeyDown",
    "onMouseDown",
    "onFocusIn",
    "onFocusOut",
  ]);

  const [items, setItems] = createSignal<CollectionItemWithRef[]>([]);
  const { DomCollectionProvider } = createDomCollection({
    items,
    onItemsChange: setItems,
  });

  const listState = createListState({
    selectedKeys: () => local.value,
    defaultSelectedKeys: () => local.defaultValue,
    onSelectionChange: (value) => local.onChange?.(Array.from(value)),
    disallowEmptySelection: () => !local.multiple && !local.collapsible,
    selectionMode: () => (local.multiple ? "multiple" : "single"),
    dataSource: items,
  });
  const selectableList = createSelectableList(
    {
      selectionManager: () => listState.selectionManager(),
      collection: () => listState.collection(),
      disallowEmptySelection: () =>
        listState.selectionManager().disallowEmptySelection(),
      shouldFocusWrap: () => local.shouldFocusWrap,
      disallowTypeAhead: true,
      allowsTabNavigation: true,
    },
    () => ref
  );

  const context: AccordionContextValue = {
    listState: () => listState,
    generateId: createGenerateId(() => local.id!),
  };

  return (
    <DomCollectionProvider>
      <AccordionContext.Provider value={context}>
        <Polymorphic<AccordionRootRenderProps>
          as="div"
          id={local.id!}
          ref={mergeRefs((el) => (ref = el), local.ref)}
          onKeyDown={composeEventHandlers([
            local.onKeyDown,
            selectableList.onKeyDown,
          ])}
          onMouseDown={composeEventHandlers([
            local.onMouseDown,
            selectableList.onMouseDown,
          ])}
          onFocusIn={composeEventHandlers([
            local.onFocusIn,
            selectableList.onFocusIn,
          ])}
          onFocusOut={composeEventHandlers([
            local.onFocusOut,
            selectableList.onFocusOut,
          ])}
          {...others}
        />
      </AccordionContext.Provider>
    </DomCollectionProvider>
  );
}
