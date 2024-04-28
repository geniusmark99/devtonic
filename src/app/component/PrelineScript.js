"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      const prelineModule = await import("preline/preline");
      
      // Access autoInitmethod from imported module and call it
      prelineModule.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}
