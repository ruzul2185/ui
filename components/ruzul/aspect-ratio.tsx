"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

type AspectRatioProps = React.ComponentProps<typeof AspectRatioPrimitive.Root>;

const AspectRatio = ({ children, className, ...props }: AspectRatioProps) => {
  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      className={className}
      {...props}
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
};

export default AspectRatio;
