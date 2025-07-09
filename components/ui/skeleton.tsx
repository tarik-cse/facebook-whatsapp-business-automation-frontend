// components/ui/skeleton.tsx
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-800",
        className
      )}
      {...props}
    />
  )
);

Skeleton.displayName = "Skeleton";

export { Skeleton };