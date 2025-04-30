"use client";
import Link from "next/link";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { CommentCard } from "@/components/ui/comment-card";
import { ArticleCard } from "@/components/ui/article-card";
import { MomentCard } from "@/components/ui/moment-card";
import { BubblePagination } from "@/components/ui/bubble-pagination";

export default function BubbleDayPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">articles</h1>
      <ArticleCard>
        <div>profile</div>
        <div>name</div>
        <div>
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut laborelorem ipsum dolor sit amet consectetur
          adipiscing elit sed do eiusmod tempor incididunt ut labore
        </div>
        <div>
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore
        </div>
      </ArticleCard>
      <br></br>
      <CommentCard>wowwwww댓글</CommentCard>
      <MomentCard>mmmmmm</MomentCard>
      <br></br>
      <CommentCard>wowwwww댓글</CommentCard>
      <br></br>
      <CommentCard>wowwwww댓글</CommentCard>
      <BubblePagination />
    </div>
  );
}
