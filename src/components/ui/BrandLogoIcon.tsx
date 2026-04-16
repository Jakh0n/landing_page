import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandLogoIconProps = {
  className?: string;
};

/**
 * Logo: Lucide binoqosh ikonkasi, brend binafsha rangida.
 */
export function BrandLogoIcon({ className }: BrandLogoIconProps) {
  return (
    <GraduationCap
      className={cn("shrink-0 text-[#5B50F2]", className)}
      aria-hidden
      strokeWidth={2}
    />
  );
}
