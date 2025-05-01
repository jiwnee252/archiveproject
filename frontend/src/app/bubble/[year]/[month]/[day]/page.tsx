'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ChatCard } from '@/components/ui/chat-card'
import { Chat } from '@/components/ui/chat'
import { BubblePagination } from '@/components/ui/bubble-pagination'

export default function BubblePage() {
  const params = useParams()
  const [chatData, setChatData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bubble/${params.year}/${params.month}/${params.day}/`
      )
      const data = await res.json()
      setChatData(data)
    }
    fetchData()
  }, [params])

  const dateString = chatData.length > 0 ? chatData[0].date : '' // 이게 핵심!!

  return (
    <div>
      <ChatCard date={dateString}>
        <div className="flex flex-col">
          {chatData.map((chat: any, idx: number) => (
            <Chat
              key={idx}
              profileImage={`${process.env.NEXT_PUBLIC_BACKEND_URL}${chat.profile_image}`}
              name={chat.name}
              time={chat.time}
              content={chat.content_text}
              imageContent={
                chat.content_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${chat.content_image}` : undefined
              }
            />
          ))}
        </div>
      </ChatCard>
      <div className="flex justify-center">
        <BubblePagination />
      </div>
    </div>
  )
}
