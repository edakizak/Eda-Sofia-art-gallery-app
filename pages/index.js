import useSWR from "swr";
import ArtPieces from "../components/art_pieces/index.js";
import Link from "next/link";
import Spotlight from "@/components/spotlight/index.js";

const url = "https://example-apis.vercel.app/api/art";
export default function HomePage() {
  const { data, error, isLoading } = useSWR(url);
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  const randomPiece = data[Math.floor(Math.random() * data.length - 1)];
  console.log(randomPiece);
  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        name={randomPiece.name}
      />
      <ArtPieces pieces={data} />
      <Link href="/artpieces"> Art Pieces</Link>
    </div>
  );
}
