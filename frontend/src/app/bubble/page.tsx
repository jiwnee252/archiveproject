"use client";
import Link from "next/link";
import Folder from "@/components/animations/Folder/Folder";

export default function BubblePage() {
  const years = ["2020", "2021", "2022", "2023"];
  // const years = ["2023", "2024", "2025"];

  return (
    <div
      style={{ height: "calc(100vh - 64px)" }} // 여기서 64px은 navbar 높이
      className="flex justify-center items-center select-none"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-8">select year</h1>

        <div className="flex flex-row flex-wrap gap-7 justify-center">
          {years.map((year) => (
            <Link
              key={year}
              href={`/bubble/${year}`}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
            >
              <Folder />
              <span className="mt-2 font-medium">{year}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
