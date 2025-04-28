'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function BubbleMonthPage() {
  const { year, month } = useParams<{ year: string; month: string }>()

  const days = ['01', '02', '03', '04']

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        {year}년 {month}월 날짜 선택
      </h1>
      <ul className="space-y-4">
        {days.map((day) => (
          <li key={day}>
            <Link href={`/bubble/${year}/${month}/${day}`} className="text-blue-500 underline">
              {day}일
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
