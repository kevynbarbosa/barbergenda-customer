"use client";

import Image from "next/image";
import clsx from "clsx";

type BrandMarkProps = {
  size?: number;
  tone?: "light" | "dark";
  className?: string;
  alt?: string;
  src?: string;
};

const DEFAULT_SRC = "/servicos/logo.png";

export function BrandMark({
  size = 48,
  tone = "dark",
  className,
  alt = "Logo Barbergenda",
  src = DEFAULT_SRC,
}: BrandMarkProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full ring-1",
        tone === "dark"
          ? "bg-white/10 ring-white/15"
          : "bg-white/90 ring-black/5 shadow-sm",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full rounded-full object-cover"
        priority={size >= 48}
      />
    </div>
  );
}
