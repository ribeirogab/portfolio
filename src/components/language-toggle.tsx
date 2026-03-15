"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { Languages } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();

  const currentLocale = locales.find(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  ) ?? "en";

  const nextLocale: Locale = currentLocale === "en" ? "pt" : "en";

  const newPathname = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);

  function handleClick() {
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000`;
    window.location.href = newPathname;
  }

  return (
    <button
      onClick={handleClick}
      className={className}
      aria-label={`Switch to ${nextLocale === "en" ? "English" : "Português"}`}
    >
      <Languages className="size-full" />
    </button>
  );
}
