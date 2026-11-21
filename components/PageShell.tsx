import { SilkBackground, type SilkVariant } from "@/components/SilkBackground";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageShell({
  variant = "mist",
  children,
}: {
  variant?: SilkVariant;
  children: React.ReactNode;
}) {
  return (
    <>
      <SilkBackground variant={variant} />
      <div className={`page-shell theme-${variant}`}>
        <SiteHeader variant={variant} />
        <main className="flex-1">{children}</main>
        <SiteFooter variant={variant} />
      </div>
    </>
  );
}
