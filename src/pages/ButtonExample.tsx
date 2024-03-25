import { JSX } from "solid-js";

export const ButtonExample = () => {
    return <div class={"flex gap-2 items-center justify-center h-full w-full"}>
        <button class="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 shadow-sm rounded-md active:scale-95">主按钮
        </button>
        <button
            class="bg-red-600 hover:bg-red-600/80 text-white py-1 px-4 shadow-sm rounded-md active:scale-95">危险按钮
        </button>
        <button class="bg-blue-600 text-white py-1 px-4 shadow-sm rounded-md cursor-not-allowed opacity-50">禁用主按钮
        </button>
        <button
            class="rounded-md bg-white py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 active:scale-95">默认按钮
        </button>
        <button
            class="rounded-md bg-white py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 cursor-not-allowed opacity-50">默认按钮
        </button>
        <button
            class="rounded-md bg-white py-1 px-4 text-gray-900 hover:bg-gray-200 active:scale-95 active:bg-gray-200">文本按钮
        </button>
        <button class="text-blue-600 hover:underline underline-offset-1"
                style={{"text-decoration-thickness": "2px"}}>链接按钮
        </button>
        <button class="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 shadow-sm rounded-md active:scale-95 inline-flex items-center">
            <SvgSpinners180Ring /> 加载中
        </button>
        {/* TODO icon button，size，dropdown button、button group */}
        <button>
            <SvgSpinners180Ring />
        </button>


    </div>
}


export function SvgSpinners180Ring(props: JSX.IntrinsicElements['svg'], key: string) {
    return (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="mr-2 h-4 w-4 animate-spin">
        <path
            d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg>);
    // return (
    //     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    //         <path fill="#888888"
    //               d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
    //             <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
    //                               values="0 12 12;360 12 12"></animateTransform>
    //         </path>
    //     </svg>
    // )
}