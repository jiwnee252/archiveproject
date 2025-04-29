'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CalendarIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SearchModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="w-fit h-fit max-w-full max-h-screen p-8 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-4 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* 텍스트 검색 */}
        <p className="text-center text-sm">내용으로 검색</p>
        <div className="w-64 bg-white flex items-center justify-between border border-gray-300 rounded-full px-4 py-2">
          <Input
            placeholder="검색어를 입력하세요..."
            className="border-none shadow-none bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>

        {/* 날짜 검색 */}
        <p className="text-center text-sm">날짜로 검색</p>
        <div className="w-64 bg-white flex items-center justify-between border border-gray-300 rounded-full px-4 py-2">
          <CalendarIcon className="w-4 h-4 mr-2 text-gray-500" />
          <DatePicker />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function DatePicker() {
  const [year, setYear] = useState('2025')
  const [month, setMonth] = useState('04')
  const [day, setDay] = useState('29')

  const years = Array.from({ length: 30 }, (_, i) => `${2000 + i}`)
  const months = Array.from({ length: 12 }, (_, i) => `${(i + 1).toString().padStart(2, '0')}`)
  const days = Array.from({ length: 31 }, (_, i) => `${(i + 1).toString().padStart(2, '0')}`)

  return (
    <div className="flex gap-1 items-center text-sm">
      <select value={year} onChange={(e) => setYear(e.target.value)} className="bg-transparent outline-none">
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      /
      <select value={month} onChange={(e) => setMonth(e.target.value)} className="bg-transparent outline-none">
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      /
      <select value={day} onChange={(e) => setDay(e.target.value)} className="bg-transparent outline-none">
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  )
}
