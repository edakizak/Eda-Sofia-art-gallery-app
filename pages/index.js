// import ArtPieces from "../components/art_pieces/index.js";
// import Link from "next/link";
import Spotlight from "@/components/spotlight/index.js";

export default function SpotlightPage({ data }) {
  const randomPiece = data[Math.floor(Math.random() * data.length - 1)];
  console.log(randomPiece);
  const pieces = { data };
  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        name={randomPiece.name}
        pieces={data}
      />
      {/* <ArtPieces pieces={data} />
      <Link href="/artpieces"> Art Pieces</Link> */}
    </div>
  );
}
