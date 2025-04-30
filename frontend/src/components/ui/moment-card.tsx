import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function MomentCard() {
  const MomentData = {
    profileImage: "/profile_images/profile.jpg",
    name: "이름",
    datetime: "2025-04-28 18:30",
    content:
      "안녕하세요 댓글입니다 댓글처음달아봅니다 안녕하시죠 배가고프네요 이건제댓글이고요 무플방지위원회 ",
  };

  return (
    <Card className="w-[400px] shadow-md m-auto">
      <CardHeader className="flex flex-row items-center gap-3 py-0 mx-0">
        <div>
          <div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <Image
                  src={MomentData.profileImage}
                  alt="profile"
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                  style={{ aspectRatio: 1 }}
                />
                <span className="font-semibold text-black text-sm">
                  {MomentData.name}
                </span>
                <span className="text-xs text-neutral-500">
                  {MomentData.datetime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-800 text-sm">{MomentData.content}</p>
      </CardContent>
    </Card>
  );
}
