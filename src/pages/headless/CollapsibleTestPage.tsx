import * as Collapsible from "../../headless/collapsible";

export const CollapsibleTestPage = () => {
  return (
    <>
      <h1>CollapsibleTestPage</h1>
      <div class="m-8">
        <Collapsible.Root>
          <Collapsible.Trigger>切换</Collapsible.Trigger>
          <Collapsible.Content class=" data-[closed]:animate-slideUp overflow-hidden text-sm transition-all data-[expanded]:animate-slideDown">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </>
  );
};
