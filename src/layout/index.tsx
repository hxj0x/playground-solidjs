import { Show, createSignal } from "solid-js";
import { PasswordIcon } from "../pages/login/loginPage";

export const Layout = () => {
  const [getPasswordInputType, setPasswordInputType] = createSignal<
    "password" | "text"
  >("password");

  const togglePasswordInputType = () => {
    setPasswordInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <>
      <div class="flex h-screen flex-col">
        <header class="border-b border-slate-900/15  flex-shrink-0 h-10 flex items-center shadow-sm">
          <div class="font-bold text-lg w-64 flex items-center justify-center border-r border-slate-900/15 h-full">
            <h1>后台管理系统</h1>
          </div>
        </header>
        <div class="flex-1 flex overflow-hidden">
          <nav class="border-r border-slate-900/15 w-64 overflow-y-auto shadow-lg"></nav>
          <main class="flex-1 overflow-y-auto">
            {/* 面包屑 */}
            {/* 内容 */}
            <div class="flex items-center">
              <label for="input1" class="focus:font-bold">
                input1
              </label>
              <span class="flex items-center border-2 border-gray-400 m-2 has-[:focus]:border-blue-500 rounded-lg overflow-hidden px-2">
                <PasswordIcon />
                <input
                  id="input1"
                  type={getPasswordInputType()}
                  class="border-0 right-0 focus:ring-0"
                  placeholder="请输入密码"
                />
                <button
                  type="button"
                  /*   border-2 border-gray-300 focus:border-blue-600 border-l-0 focus:border-l-2 */
                  class="flex-shrink-0 rounded-e flex-1 flex items-center justify-center outline-none focus-visible:ring"
                  onClick={togglePasswordInputType}
                >
                  <Show
                    when={getPasswordInputType() === "password"}
                    fallback={<EyeIcon />}
                  >
                    <EyeInVisibleIcon />
                  </Show>
                </button>
              </span>
            </div>
            <div class="flex items-center">
              <label for="input2" class="focus:font-bold">
                input1
              </label>
              <span class="border-2 border-gray-400 m-2 inline-block has-[:focus]:border-blue-500 rounded-lg overflow-hidden">
                <input
                  id="input2"
                  type="text"
                  class="border-0 right-0 focus:ring-0"
                />
              </span>
            </div>
          </main>
        </div>
      </div>
    </>
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
