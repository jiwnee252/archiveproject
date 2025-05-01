// components/ui/chat.tsx
'use client'

import Image from 'next/image'

interface ChatMessageProps {
  profileImage: string
  name: string
  time: string
  content?: string
  imageContent?: string
}

export function Chat({ profileImage, name, time, content, imageContent }: ChatMessageProps) {
  return (
    <div className="">
      <div className="flex items-start gap-2">
        <Image
          src={profileImage}
          alt="프로필 이미지"
          width={32}
          height={32}
          className="rounded-full object-cover me-1"
          style={{ aspectRatio: 1 }}
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm pb-2">{name}</span>

          {content && (
            <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg rounded-tl-none max-w-xs text-sm">
              {content}
            </div>
          )}

          {imageContent && (
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg rounded-tl-none max-w-[180px] w-full mt-2">
              <Image
                src={imageContent}
                alt="chat image"
                width={180}
                height={0} // 쓰레기값
                layout="intrinsic"
                className="rounded-tl-none rounded-lg object-cover w-full h-auto"
              />
            </div>
          )}
        </div>

        <span className="text-[10px] text-neutral-500 mt-auto self-end">{time}</span>
      </div>
    </div>
  )
}
