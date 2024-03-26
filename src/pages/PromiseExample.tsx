import { createSignal, onMount } from "solid-js";

export const PromiseExample = () => {
  const [getRes, setRes] = createSignal<string>();

  onMount(async () => {
    console.log(new Date());
    const res = await new Promise((resolve) => setTimeout(resolve, 2000)).then(
      () => "resolve ok"
    );
    setRes(res);
    console.log(new Date());
  });

  setTimeout(() => {
    console.log(new Date());
    setRes("resolve ok 2");
    console.log(new Date());
  }, 10_000);

  return (
    <>
      <h1>PromiseExample</h1>
      <div>{getRes() || "loading"}</div>
    </>
  );
};
