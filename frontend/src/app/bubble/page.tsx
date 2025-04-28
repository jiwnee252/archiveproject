'use client'
import Link from 'next/link'

export default function BubbleHome() {
  const years = ['2020', '2021', '2022']

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">버블 연도 선택</h1>
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
  )
}
