export const Layout = () => {
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
          </main>
        </div>
      </div>
    </>
  );
};
