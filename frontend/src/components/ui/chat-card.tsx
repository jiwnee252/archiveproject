// components/ui/chat-card.tsx
'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ArticleCardProps {
  children?: React.ReactNode
}

interface ArticleCardProps {
  children?: React.ReactNode
  date?: string // 여기에 date prop 추가
}

export function ChatCard({ children, date }: ArticleCardProps) {
  return (
    <div className="m-auto my-8">
      <Card className="w-[330px] sm:w-[400px] max-w-full m-auto shadow-md">
        <CardHeader className="text-sm text-neutral-500">{date}</CardHeader>

        <CardContent>
          <div>{children}</div>
        </CardContent>
      </Card>
    </div>
  )
}
