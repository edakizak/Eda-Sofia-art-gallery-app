// import ArtPieces from "../components/art_pieces/index.js";
// import Link from "next/link";
import Spotlight from "@/components/Spotlight/Spotlight.js";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  const randomPiece = data[Math.floor(Math.random() * data.length)];
  console.log(randomPiece);
  const pieces = { data };

  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        name={randomPiece.name}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
      />
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={randomPiece.slug}
        isFavorite={isFavorite}
      />
    </div>
  );
}
