import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ArticleCardProps {
  children?: React.ReactNode
}

export function ArticleCard({ children }: ArticleCardProps) {
  const articleData = {
    profileImage: '/profile_images/profile.jpg',
    name: '이름',
    datetime: '2025-04-28 18:30',
    defaultContent: (
      <p className="text-gray-800 text-sm">
        기본 댓글 내용입니다 기본 댓글 내용입니다 기본 댓글 내용입니다 기본 댓글 내용입니다...
      </p>
    ),
  }

  return (
    <Card className="w-full max-w-5xl shadow-md">
      <CardHeader className="flex flex-col items-center gap-3 py-0 mx-0">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            {/* <span className="font-semibold text-black text-sm">제목입니다</span> */}
            {/* <span className="text-xs text-gray-500">소제목입니다</span> */}
          </div>
        </div>
      </CardHeader>
      <CardContent>{children || articleData.defaultContent}</CardContent>
    </Card>
  )
}
