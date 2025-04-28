"use client";
import Link from "next/link";
import { CommentCard } from "@/components/ui/comment-card";

export default function NoticePage() {
  return (
    // <div>
    //   {/* <Navbar /> */}
    //   <div className="p-8 text-black dark:text-white">
    //     <h1 className="text-4xl font-bold mb-4">공지사항</h1>
    //     <p className="mt-4">여기는 공지사항 내용을 보여주는 곳이에요ㅎㅎㅎ</p>
    //   </div>
    // </div>

    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">notice</h1>
      <p className="text-lg">여기는 공지사항 내용을 보여주는 곳이에요ㅎㅎㅎ</p>
      <CommentCard />
    </div>
  );
}
