import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  /** brand = emblème + ZELEVENTS | full = logo complet avec tagline */
  variant?: "brand" | "full";
  priority?: boolean;
};

const BRAND_ASPECT = 1536 / 540;
const FULL_ASPECT = 1536 / 1024;

export default function Logo({
  className = "",
  variant = "brand",
  priority = false,
}: LogoProps) {
  const isBrand = variant === "brand";
  const src = isBrand ? "/logo-brand.png" : "/logo-transparent.png";

  return (
    <Image
      src={src}
      alt={siteConfig.name}
      width={isBrand ? 320 : 280}
      height={isBrand ? Math.round(320 / BRAND_ASPECT) : Math.round(280 / FULL_ASPECT)}
      priority={priority}
      className={`w-auto object-contain ${
        isBrand ? "h-14 sm:h-16 md:h-[4.25rem]" : "h-32 md:h-36"
      } ${className}`}
    />
  );
}
