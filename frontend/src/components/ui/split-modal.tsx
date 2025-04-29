"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SplitModal() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Search</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader className="flex flex-row justify-evenly">
          <DialogTitle className="text-center">날짜 검색</DialogTitle>
          <DialogTitle className="text-center">내용 검색</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row pt-4">
          {/* 왼쪽 캘린더 */}
          <div className="w-[calc(50%-1px)] px-[30px]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          {/* 중앙 구분선 */}
          <Separator
            orientation="vertical"
            className="hidden sm:block h-auto mx-0"
          />

          {/* 오른쪽 검색창 */}
          <div className="w-[calc(50%-1px)] px-[30px] space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8" />
            </div>
            <div className="rounded-md border p-4 h-[calc(100%-60px)]">
              <p className="text-sm text-muted-foreground">
                Search results will appear here
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
