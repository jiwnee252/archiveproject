import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function CommentCard() {
  const commentData = {
    profileImage: "/profile_images/profile.jpg", // public/images/profile.png 경로에 더미 이미지 넣기
    name: "이름",
    datetime: "2025-04-28 18:30",
    content:
      "댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 댓글의내용 ",
  };

  return (
    <Card className="w-[350px] shadow-md">
      <CardHeader className="flex flex-row items-center gap-3 py-0 mx-0">
        <div>
          <div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <Image
                  src={commentData.profileImage}
                  alt="profile"
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                  style={{ aspectRatio: 1 }}
                />
                <span className="font-semibold text-black text-sm">
                  {commentData.name}
                </span>
                <span className="text-xs text-gray-500">
                  {commentData.datetime}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-gray-800 text-sm">{commentData.content}</p>
          </div>
        </div>
      </CardHeader>
      {/* <CardContent>
        <p className="text-gray-800 text-sm">{commentData.content}</p>
      </CardContent> */}
    </Card>
  );
}
