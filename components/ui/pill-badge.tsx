import { cn } from "@/lib/utils";

type PillBadgeProps = React.ComponentPropsWithoutRef<"span">;

export function PillBadge({ className, ...props }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.15),0_8px_24px_rgba(37,99,235,0.12)]",
        className,
      )}
      {...props}
    />
  );
}
