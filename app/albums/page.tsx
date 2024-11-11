import { NextPage } from "next";
import Layout from "../components/layouts";
import { Image } from "lucide-react";
import AlbumCard from "../components/albums/AlbumCard";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface AlbumWithPhotos extends Album {
  photos: Photo[];
}

const AlbumsPage: NextPage = async () => {
  const [albumsResponse, photosResponse] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/albums"), fetch("https://jsonplaceholder.typicode.com/photos")]);

  const albums: Album[] = await albumsResponse.json();
  const photos: Photo[] = await photosResponse.json();

  const albumsWithPhotos: AlbumWithPhotos[] = albums.map((album) => ({
    ...album,
    photos: photos.filter((photo) => photo.albumId === album.id),
  }));
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <Image className="h-6 w-6 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Photo Albums</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albumsWithPhotos.map((album) => (
            <AlbumCard key={album.id} {...album} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlbumsPage;
