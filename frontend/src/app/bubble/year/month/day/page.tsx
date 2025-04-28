'use client'
import { useParams } from 'next/navigation'

export default function BubbleDayPage() {
  const { year, month, day } = useParams<{ year: string; month: string; day: string }>()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        {year}년 {month}월 {day}일 버블
      </h1>
      <p>
        여기는 {year}년 {month}월 {day}일의 버블 상세 페이지야!
      </p>
    </div>
  )
}
