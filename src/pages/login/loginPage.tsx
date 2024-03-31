import { Component, ComponentProps, Show, createSignal } from "solid-js";

export const LoginPage = () => {
  const [getPasswordInputType, setPasswordInputType] = createSignal<
    "password" | "text"
  >("password");

  const togglePasswordInputType = () => {
    setPasswordInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <>
      <div class="flex justify-center items-center h-screen flex-col">
        <div class="h-[15%]">{/* 暂不支持语言切换 */}</div>
        <div class="h-[15%]">
          <h1 class="text-2xl font-bold">后台管理系统</h1>
          <p class="text-gray-400 text-sm p-4">通用数据管理框架</p>
        </div>
        <div class="flex flex-col h-1/2 shadow-lg w-96 border-blue-500 border-y-[5px] rounded items-center">
          <div class="h-1/5 flex items-center">
            <h3 class="text-lg"> 账户密码登录</h3>
          </div>
          <div>
            <div class="mb-4 w-64 flex relative">
              <input
                type="text"
                /*  focus:ring-2 focus:ring-indigo-600 focus:ring-inset ring-1 ring-gray-300  */
                class=" shadow-sm block outline-none pl-8 pr-4 py-2 rounded flex-1 border-2 border-gray-300 focus:border-blue-600"
                placeholder="账号"
              />
              <div class="absolute left-0 inset-y-0 flex items-center pl-3">
                <UserIcon />
              </div>
            </div>
          </div>
          <div class="mb-4 w-64 flex relative">
            <div class="absolute left-0 inset-y-0 flex items-center pl-3">
              <PasswordIcon />
            </div>
            <input
              type={getPasswordInputType()}
              /* focus:ring-2 focus:ring-indigo-600 focus:ring-inset ring-1 ring-gray-300 */
              class="shadow-sm block outline-none pl-8 pr-4 py-2 rounded flex-1 border-2 border-gray-300 focus:border-blue-600"
              placeholder="密码"
            />
            <button
              type="button"
              /*   border-2 border-gray-300 focus:border-blue-600 border-l-0 focus:border-l-2 */
              class="flex-shrink-0 rounded-e flex-1 flex items-center justify-center  outline-none absolute right-0 inset-y-0 p-3 focus:ring-2 focus:ring-blue-600"
              onClick={togglePasswordInputType}
            >
              <Show
                when={getPasswordInputType() === "password"}
                fallback={<EyeIcon />}
              >
                <EyeInVisibleIcon />
              </Show>
            </button>
          </div>
          <div class="mb-4 w-64 flex justify-between items-center">
            <div class="flex items-center justify-center">
              <input
                type="checkbox"
                name="remeberMe"
                id="remeberMe"
                class="mr-2"
              />
              <label for="remeberMe" class="text-sm">
                记住我
              </label>
            </div>
            <a
              href="#"
              class="text-blue-800 hover:text-blue-600 hover:underline text-sm"
            >
              忘记密码
            </a>
          </div>
          <div class="mb-4 w-64 flex">
            <button type="button" class="flex-1 bg-blue-600 text-white">
              登录
            </button>
          </div>
        </div>
        <div class="h-[20%] flex items-center justify-center text-gray-400 text-xs">
          <CopyRightIcon />
          版权 2018 - {new Date().getFullYear()}
          <a
            href="https://www.erupt.xyz"
            target="_blank"
            class="m-1 text-blue-400 hover:underline"
          >
            Erupt Framework
          </a>
          All rights reserved.
        </div>
      </div>
    </>
  );
};

const PasswordIcon = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      fill="currentColor"
      width="1em"
      height="1em"
      data-icon="lock"
      aria-hidden="true"
    >
      <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"></path>
    </svg>
  );
};

const UserIcon: Component<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      /* TODO会不会有问题 */
      {...props}
      viewBox="64 64 896 896"
      fill="currentColor"
      width="1em"
      height="1em"
      data-icon="user"
      aria-hidden="true"
    >
      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
    </svg>
  );
};

const EyeIcon = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      data-icon="eye"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
    </svg>
  );
};

const EyeInVisibleIcon = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      data-icon="eye-invisible"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
      <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
    </svg>
  );
};

const CopyRightIcon = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      fill="currentColor"
      width="1em"
      height="1em"
      data-icon="copyright"
      aria-hidden="true"
      class="mr-1"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path>
    </svg>
  );
};
