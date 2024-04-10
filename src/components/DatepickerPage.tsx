import { arrow, computePosition, flip, offset, shift } from "@floating-ui/dom";
import { onMount } from "solid-js";

export const DatepickerPage = () => {
  let btnRef: HTMLButtonElement | undefined;
  let tooltipRef: HTMLDivElement | undefined;
  let arrowRef: HTMLDivElement | undefined;

  onMount(() => {
    if (
      btnRef === undefined ||
      tooltipRef === undefined ||
      arrowRef === undefined
    )
      return;
    computePosition(btnRef, tooltipRef, {
      placement: "bottom",
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowRef }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(tooltipRef.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
      // Accessing the data
      const arrow = middlewareData.arrow;
      console.log(arrow?.x);
      console.log(arrow?.y);

      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
      }[placement.split("-")[0]];

      Object.assign(arrowRef.style, {
        left: arrow?.x !== undefined ? `${arrow.x}px` : "",
        top: arrow?.x !== undefined ? `${arrow.x}px` : "",
        right: "",
        bottom: "",
        [staticSide!]: "-4px",
      });
    });
  });

  return (
    <>
      <div class="m-8 mt-16">
        <button
          ref={btnRef}
          type="button"
          class="border-2 px-5 py-2 border-orange-700 rounded"
        >
          My Button
        </button>
        <div
          ref={tooltipRef}
          role="tooltip"
          class="bg-gray-950 bg-transparent/35 max-w-max px-5 py-2 absolute top-0 left-0"
        >
          My Tooltip
          <div ref={arrowRef} class="absolute bg-black w-2 h-2 rotate-45"></div>
        </div>
      </div>
    </>
  );
};
