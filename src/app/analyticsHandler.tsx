"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function GoogleAnalyticsHandler() {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === "production"; // Verifica o ambiente

  useEffect(() => {
    if (!isProduction) return; // Não executa no ambiente de desenvolvimento

    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, isProduction]);

  return null;
}
