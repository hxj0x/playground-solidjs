import clsx from "clsx";
import {
  Component,
  ComponentProps,
  JSX,
  createSignal,
  splitProps,
} from "solid-js";

export const ButtonExample = () => {
  let i = 0;
  const [getHtmlType, setHtmlType] = createSignal<
    "button" | "submit" | "reset"
  >("button");

  const changeType = () => {
    i++;
    const mod = i % 3;
    // console.log(mod);
    console.log(getHtmlType());
    if (mod === 0) {
      setHtmlType("button");
    } else if (mod === 1) {
      setHtmlType("submit");
    } else if (mod === 2) {
      setHtmlType("reset");
    }
  };

  return (
    <div class={"flex gap-2 items-center justify-center h-full w-full"}>
      <button class="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 shadow-sm rounded-md active:scale-95">
        主按钮
      </button>
      <button class="bg-red-600 hover:bg-red-600/80 text-white py-1 px-4 shadow-sm rounded-md active:scale-95">
        危险按钮
      </button>
      <button class="bg-blue-600 text-white py-1 px-4 shadow-sm rounded-md cursor-not-allowed opacity-50">
        禁用主按钮
      </button>
      <button class="rounded-md bg-white text-gray-900 py-1 px-4  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 active:scale-95">
        默认按钮
      </button>
      <button class="rounded-md bg-white py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 cursor-not-allowed opacity-50">
        默认按钮
      </button>
      <button class="rounded-md bg-white py-1 px-4 text-gray-900 hover:bg-gray-200 active:scale-95 active:bg-gray-200">
        文本按钮
      </button>
      <button
        class="text-blue-600 hover:underline underline-offset-1"
        style={{ "text-decoration-thickness": "2px" }}
      >
        链接按钮
      </button>
      <button class="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 shadow-sm rounded-md active:scale-95 inline-flex items-center">
        <SvgSpinners180Ring /> 加载中
      </button>
      {/* TODO icon button，size，dropdown button、button group */}
      <button>
        <SvgSpinners180Ring />
      </button>
      <Button htmlType="button" type="primary">
        组件按钮1
      </Button>
      <Button htmlType={getHtmlType()} onclick={changeType}>
        组件按钮2
      </Button>
    </div>
  );
};

interface IButtonProps extends Omit<ComponentProps<"button">, "type"> {
  type?: "default" | "primary";
  shape?: "default" | "circle" | "round";
  danger?: boolean;
  loading?: boolean;
  htmlType?: "submit" | "reset" | "button";
}

export const Button: Component<IButtonProps> = (props) => {
  const [local, restProps] = splitProps(props, [
    "type",
    "shape",
    "danger",
    "loading",
    "htmlType",
    "class",
    "children",
  ]);

  const className = () => {
    return clsx(
      "py-1 px-4 shadow-sm rounded-md",
      "bg-red-300" && local.type === "default",
      local.class
    );
  };

  return (
    <button type={local.htmlType} {...restProps} class={className()}>
      {local.children}
    </button>
  );
};

export function SvgSpinners180Ring(
  props: JSX.IntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="mr-2 h-4 w-4 animate-spin"
    >
      <path
        d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
