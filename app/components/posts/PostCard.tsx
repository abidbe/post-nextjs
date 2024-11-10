"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PostCardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ userId, id, title, body }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="space-y-4">
        {/* Header with ID and UserID */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md">ID: {id}</span>
            <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md">User: {userId}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 hover:text-indigo-600">
          <Link href={`/posts/${id}`}>{title}</Link>
        </h2>

        {/* Body */}
        <p className="text-gray-600 line-clamp-3">{body}</p>

        {/* Footer with Read More link */}
        <div className="pt-4">
          <Link href={`/posts/${id}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium">
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
