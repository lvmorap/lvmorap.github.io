import { cn } from "@/lib/utils";

type CardProps = React.ComponentPropsWithoutRef<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}
