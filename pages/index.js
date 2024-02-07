// import ArtPieces from "../components/art_pieces/index.js";
// import Link from "next/link";
import Spotlight from "@/components/Spotlight/Spotlight.js";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function Root({ data, onToggleFavorite, isFavorite }) {
  const randomPiece = data[Math.floor(Math.random() * data.length)];
  console.log(randomPiece);

  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        name={randomPiece.name}
        pieces={data}
        // artPiecesInfo={artPiecesInfo}
      />
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={randomPiece.slug}

        // isFavorite={
        //   artPiecesInfo.find((piece) => piece.slug === randomPiece.slug)
        //     ?.isFavorite
        // }
        // onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
      />
    </div>
  );
}
