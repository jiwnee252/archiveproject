"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CalendarIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className="w-fit h-fit max-w-full max-h-screen p-8 
        bg-white dark:bg-neutral-900 
        rounded-xl shadow-md 
        flex flex-col items-center justify-center gap-4 
        fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex flex-row gap-3">
          <p>링크1</p>
          <p>링크2</p>
        </div>

        {/* 텍스트 검색 */}
        <p className="text-center text-sm text-neutral-700 dark:text-neutral-300">
          내용으로 검색
        </p>
        <div
          className="w-64 h-10 bg-white dark:bg-neutral-800 
          border border-neutral-300 dark:border-neutral-600 
          rounded-full px-4 py-2 relative"
        >
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            className="h-full border-none shadow-none bg-transparent outline-none pr-8 pl-2 text-sm w-full 
              focus:ring-0 focus:outline-none 
              text-neutral-900 dark:text-neutral-100 
              placeholder-neutral-400 dark:placeholder-neutral-500"
          />
          <Search className="w-4 h-4 text-neutral-500 dark:text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* 날짜 검색 */}
        <p className="text-center text-sm text-neutral-700 dark:text-neutral-300">
          날짜로 검색
        </p>
        <div
          className="w-64 h-10 bg-white dark:bg-neutral-800 
          border border-neutral-300 dark:border-neutral-600 
          rounded-full px-4 py-2 relative"
        >
          <CalendarIcon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <div className="w-full flex justify-center items-center px-6 h-full">
            <DatePicker />
          </div>
          <Search className="w-4 h-4 text-neutral-500 dark:text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DatePicker() {
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("04");
  const [day, setDay] = useState("29");

  const years = Array.from({ length: 30 }, (_, i) => `${2000 + i}`);
  const months = Array.from(
    { length: 12 },
    (_, i) => `${(i + 1).toString().padStart(2, "0")}`
  );
  const days = Array.from(
    { length: 31 },
    (_, i) => `${(i + 1).toString().padStart(2, "0")}`
  );

  return (
    <div className="flex gap-1 items-center text-sm text-neutral-900 dark:text-neutral-100">
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="bg-transparent outline-none"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      /
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="bg-transparent outline-none"
      >
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      /
      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="bg-transparent outline-none"
      >
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}
