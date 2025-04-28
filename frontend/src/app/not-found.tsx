"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 ERROR!</h1>
      <p className="text-lg">404 ERROR</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
