"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
// import Folder from "@/components/animations/Folder/Folder";

export default function BubbleYearPage() {
  const { year } = useParams<{ year: string }>();

  const months = ["sep", "oct", "nov"];

  return (
    <div className="p-8">
      {/* <div className="flex flex-row flex-wrap gap-7">
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
      </div> */}

      <h1 className="text-3xl font-bold mb-8">{year}년 월 선택</h1>
      <ul className="space-y-4">
        {months.map((month) => (
          <li key={month}>
            <Link
              href={`/bubble/${year}/${month}`}
              className="text-blue-500 underline"
            >
              {month}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
