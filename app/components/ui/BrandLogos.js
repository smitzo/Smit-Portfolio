import Image from "next/image";

export function GithubLogo({ size = 18 }) {
  return <Image className="block shrink-0 object-contain [html[data-theme=light]_&]:invert" src="/brand/github.svg" width={size} height={size} alt="" aria-hidden="true" />;
}

export function LinkedInLogo({ size = 18 }) {
  return <Image className="block shrink-0 object-contain [html[data-theme=light]_&]:invert" src="/brand/linkedin.svg" width={size} height={size} alt="" aria-hidden="true" />;
}

export function XLogo({ size = 18 }) {
  return <Image className="block shrink-0 object-contain [html[data-theme=light]_&]:invert" src="/brand/x.svg" width={size} height={size} alt="" aria-hidden="true" />;
}
