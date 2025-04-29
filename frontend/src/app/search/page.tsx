"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SplitModal } from "@/components/ui/split-modal";
export default function SearchPage() {
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back(); // esc 누르면 이전 페이지로
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center">
      <SplitModal />
    </div>
  );
}
