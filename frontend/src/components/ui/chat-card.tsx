// components/ui/chat-card.tsx
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ArticleCardProps {
  children?: React.ReactNode;
}

export function ChatCard({ children }: ArticleCardProps) {
  const chatData = {
    datetime: "2025-04-28",
  };

  return (
    <div className="m-auto my-8">
      <Card className="w-[400px] shadow-md m-auto">
        <CardHeader className="text-center border-b">
          <div className="w-full text-sm text-neutral-500">
            {chatData.datetime}
          </div>
        </CardHeader>

        <CardContent className="p-4">{children}</CardContent>
      </Card>
    </div>
  );
}
