import { cn } from "@/lib/utils";

type SectionWrapperProps = React.ComponentPropsWithoutRef<"section"> & {
  id: string;
  title: string;
  description?: string;
};

export function SectionWrapper({
  id,
  title,
  description,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-28", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <header className="mb-8 md:mb-10">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
            {title}
          </p>
          {description ? (
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
