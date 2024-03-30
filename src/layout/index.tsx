export const Layout = () => {
  return (
    <>
      <div class="flex h-screen flex-col">
        <header class="border-b border-slate-900/15  flex-shrink-0 h-10 py-2 px-6 flex items-center">
          <h1 class="font-bold text-lg">后台管理系统</h1>
        </header>
        <div class="flex-1 flex overflow-hidden">
          <nav class="border-r border-slate-900/15 w-64 overflow-y-auto"></nav>
          <main class="flex-1 overflow-y-auto">
            {/* 面包屑 */}
            {/* 内容 */}
          </main>
        </div>
      </div>
    </>
  );
};
