import Image from "next/image";
import { cn } from "../../lib/cn";

export function GithubLogo({ size = 18 }) {
  return <Image className="block shrink-0 object-contain [html[data-theme=light]_&]:invert" src="/brand/github.svg" width={size} height={size} alt="" aria-hidden="true" />;
}

export function LinkedInLogo({ size = 18 }) {
  return <Image className="block shrink-0 object-contain [html[data-theme=light]_&]:invert" src="/brand/linkedin.svg" width={size} height={size} alt="" aria-hidden="true" />;
}

export function XLogo({ size = 18 }) {
  return <Image className="block shrink-0 object-contain [html[data-theme=light]_&]:invert" src="/brand/x.svg" width={size} height={size} alt="" aria-hidden="true" />;
}

export function TimelineLogo({ src, alt, width = 46, height = 46, className }) {
  return <Image className={cn("relative z-[1] block h-auto max-h-full max-w-full object-contain", className)} src={src} width={width} height={height} alt={alt} />;
}
