import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ArticleCardProps {
  children?: React.ReactNode;
}

export function ArticleCard({ children }: ArticleCardProps) {
  const articleData = {
    profileImage: "/profile_images/profile.jpg",
    name: "이름",
    datetime: "2025-04-28 18:30",
    defaultContent: (
      <p className="text-neutral-800 text-sm">
        기본 댓글 내용입니다 기본 댓글 내용입니다 기본 댓글 내용입니다 기본 댓글
        내용입니다...
      </p>
    ),
  };

  return (
    <div className="m-auto my-8">
      <Card className="w-[400px] shadow-md">
        <CardHeader className="flex flex-row items-center gap-3 py-0 mx-0 border-b-1 pb-6">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <Image
                src="/home_images/image7.jpg"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full object-cover"
                style={{ aspectRatio: 1 }}
              />
              <span className="font-semibold text-black text-sm">글쓴이ww</span>
              <span className="text-xs text-neutral-500">2025-04-28 18:30</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>{children || articleData.defaultContent}</CardContent>
        <CardContent>
          {/* <Image
          src="/home_images/image7.jpg"
          alt=""
          fill
          style={{ aspectRatio: 1 }}
        /> */}
        </CardContent>
      </Card>
    </div>
  );
}
