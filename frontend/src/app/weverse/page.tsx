"use client";
import Link from "next/link";
import Folder from "@/components/animations/Folder/Folder";
export default function WeversePage() {
  const years = ["2020", "2021", "2022"];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">연도 선택</h1>
      <div className="flex flex-row flex-wrap gap-7">
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
        <Folder></Folder>
      </div>
      <ul className="space-y-4">
        {years.map((year) => (
          <li key={year}>
            <Link href={`/bubble/${year}`} className="text-blue-500 underline">
              {year}년
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
