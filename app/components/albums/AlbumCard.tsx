"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

interface DataPhoto {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface AlbumCardProps {
  id: number;
  userId: number;
  title: string;
  photos: DataPhoto[];
}

const AlbumCard: FC<AlbumCardProps> = ({ id, userId, title, photos }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const previewPhotos = photos.slice(0, 4);

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Album Cover */}
      <div className="relative aspect-video rounded-t-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-0.5">
          {previewPhotos.map((photo, index) => (
            <div key={photo.id} className="relative aspect-square">
              <Image src={photo.thumbnailUrl} alt={photo.title} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <span className="text-white text-lg font-medium">{photos.length} Photos</span>
        </div>
      </div>

      {/* Album Info */}
      <div className="p-6 space-y-4">
        <div className="flex gap-2 text-sm">
          <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md">Album {id}</span>
          <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md">User {userId}</span>
        </div>

        <Link href={`/album/${id}`} className="block group">
          <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 line-clamp-2">{title}</h2>

          <div className="flex items-center mt-4 text-indigo-600 font-medium group-hover:text-indigo-500">
            <ImageIcon className="h-4 w-4 mr-2" />
            <span>View Album</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default AlbumCard;
