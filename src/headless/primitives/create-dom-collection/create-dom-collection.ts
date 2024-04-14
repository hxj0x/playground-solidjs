import { FlowComponent, createComponent } from "solid-js";

import { MaybeAccessor, access } from "@solid-primitives/utils";
import { addItemToArray } from "../../utils/array";
import { createControllableArraySignal } from "../create-controllable-signal";
import {
  DomCollectionContext,
  DomCollectionContextValue,
} from "./dom-collection-context";
import { DomCollectionItem } from "./types";
import { createSortBasedOnDOMPosition, findDOMIndex } from "./utils";

export interface CreateDomCollectionProps<
  T extends DomCollectionItem = DomCollectionItem
> {
  /** The controlled items state of the collection. */
  items?: MaybeAccessor<Array<T> | undefined>;

  /** Event handler called when the items state of the collection changes. */
  onItemsChange?: (items: Array<T>) => void;
}

export function createDomCollection<
  T extends DomCollectionItem = DomCollectionItem
>(props: CreateDomCollectionProps<T> = {}) {
  const [items, setItems] = createControllableArraySignal({
    value: () => access(props.items),
    onChange: (value) => props.onItemsChange?.(value),
  });

  createSortBasedOnDOMPosition(items, setItems);

  const registerItem = (item: T) => {
    setItems((prevItems) => {
      // Finds the item group based on the DOM hierarchy
      const index = findDOMIndex(prevItems, item);
      return addItemToArray(prevItems, item, index);
    });

    return () => {
      setItems((prevItems) => {
        const nextItems = prevItems.filter(
          (prevItem) => prevItem.ref() !== item.ref()
        );

        if (prevItems.length === nextItems.length) {
          // The item isn't registered, so do nothing
          return prevItems;
        }

        return nextItems;
      });
    };
  };

  const DomCollectionProvider: FlowComponent = (props) => {
    return createComponent(DomCollectionContext.Provider, {
      value: { registerItem } as DomCollectionContextValue,
      get children() {
        return props.children;
      },
    });
  };

  return { DomCollectionProvider };
}
