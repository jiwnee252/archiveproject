"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function BubbleMonthPage() {
  const { year, month } = useParams<{ year: string; month: string }>();
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;

    const day = selectedDate.getDate().toString().padStart(2, "0"); // 1 → '01'
    router.push(`/bubble/${year}/${month}/${day}`);
  };

  const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        {year}년 {month}월 날짜 선택
      </h1>

      {/* 캘린더 */}
      <div className="mb-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            handleSelect(d);
          }}
          className="rounded-md border shadow"
        />
      </div>

      {/* 날짜 리스트 */}
      <ul className="space-y-4">
        {days.map((day) => (
          <li key={day}>
            <Link
              href={`/bubble/${year}/${month}/${day}`}
              className="text-blue-500 underline"
            >
              {day}일
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
