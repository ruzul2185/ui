import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { Button } from "@/registry/new-york/ui/button";
import Showcase from "@/components/showcase";

const page = () => {
  return (
    <div className="max-w-3xl flex flex-col min-h-svh px-4 py-8 gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-muted-foreground">
          Renders a button or a button-like component.
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div>Preview</div>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Button>Button</Button>
          </div>
        </div>
      </div>

      <Showcase
        component={<Button>Button</Button>}
        code={`<div>code for button</div>`}
      />
    </div>
  );
};

export default page;
