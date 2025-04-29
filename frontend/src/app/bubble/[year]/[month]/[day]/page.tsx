// pages/chat.tsx 또는 app/chat/page.tsx
"use client";

import { ChatCard } from "@/components/ui/chat-card";
import { Chat } from "@/components/ui/chat";
import { BubblePagination } from "@/components/ui/bubble-pagination";

export default function ChatPage() {
  return (
    <div>
      {" "}
      <ChatCard>
        <div className="flex flex-col gap-5">
          {/* {" "} */}
          <Chat
            profileImage="/home_images/image9.jpg"
            name="사람이름"
            time="16:17"
            content="lorem ipsum search pos change lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod temporincididunt ut laborelorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
          />
          <Chat
            profileImage="/home_images/image9.jpg"
            name="사람이름"
            time="16:18"
            imageContent="/home_images/image12.jpg"
          />
          <Chat
            profileImage="/home_images/image9.jpg"
            name="사람이름"
            time="20:07"
            content="ㅎㅇㅎㅇㅎㅇ~"
          />
          <Chat
            profileImage="/home_images/image9.jpg"
            name="사람이름"
            time="20:07"
            content=" 안녕하세요 첫번째 채팅이예요!!! 반가워요!!!~~~  안녕하세요 첫번째 채팅이예요!!! 반가워요!!!~~~  안녕하세요 첫번째 채팅이예요!!! 반가워요!!!~~~  안녕하세요 첫번째 채팅"
          />
        </div>
      </ChatCard>
      <div className="flex justify-center">
        <BubblePagination />
      </div>
    </div>
  );
}
