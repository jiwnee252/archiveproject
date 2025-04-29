// components/ui/chat.tsx
"use client";

import Image from "next/image";

interface ChatMessageProps {
  profileImage: string;
  name: string;
  time: string;
  content?: string;
  imageContent?: string;
}

export function Chat({
  profileImage,
  name,
  time,
  content,
  imageContent,
}: ChatMessageProps) {
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
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs text-sm">
              {content}
            </div>
          )}

          {imageContent && (
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tl-none max-w-xs">
              <Image
                src={imageContent}
                alt="보낸 이미지"
                width={300}
                height={300}
                className="rounded-tl-none rounded-lg object-cover w-full h-auto"
              />
            </div>
          )}
        </div>

        <span className="text-[10px] text-gray-500 mt-auto self-end">
          {time}
        </span>
      </div>
    </div>
  );
}
