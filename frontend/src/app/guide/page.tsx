"use client";
import Link from "next/link";
import { ArticleCard } from "@/components/ui/article-card";
import { CommentCard } from "@/components/ui/comment-card";

export default function GuidePage() {
  return (
    <div className="flex flex-col justify-center items-center mx-12 select-none">
      <ArticleCard>
        <h1 className="text-4xl text-center font-bold mb-4">guide</h1>
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">ㅂㅂㅂㅂ</h1>
          <ul className="list-disc list-inside">
            <li>backup</li>
            <li>heej</li>
          </ul>
          <h1 className="text-2xl font-bold">ㅇㅂㅅ</h1>
          <ul className="list-disc list-inside">
            <li>backups</li>
            <li>working...</li>
          </ul>
          <h1 className="text-2xl font-bold">gallery</h1>
          <ul className="list-disc list-inside">
            <li>all photos n videos</li>
            {/* <li>working...</li> */}
          </ul>{" "}
          <br />
          <div>
            <p className="text-center">
              lorem ipsum search pos change lorem ipsum dolor sit amet
              consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              laborelorem ipsum dolor sit amet consectetur adipiscing elit sed
              do eiusmod tempor incididunt ut labore
            </p>
          </div>
          <br />
          <div>
            <p className="text-sm">오류 및 문의사항 : idididi</p>
          </div>
        </div>
      </ArticleCard>
      {/* <CommentCard /> */}
    </div>
  );
}
