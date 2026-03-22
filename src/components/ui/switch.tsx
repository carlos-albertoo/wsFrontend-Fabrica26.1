"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-9 shrink-0 items-center rounded-full border border-[#ECE8E1]/25 bg-[#0f1923] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#FF4655]/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#FF4655]/80 data-[state=checked]:bg-[#FF4655]/25",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-4 rounded-full bg-[#ECE8E1] shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-[1.05rem] data-[state=unchecked]:translate-x-0"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
