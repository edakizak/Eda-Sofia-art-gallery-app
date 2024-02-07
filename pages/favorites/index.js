import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  console.log("favorites", favorites);
  return (
    <>
      <p>hello</p>
      <ArtPieces
        pieces={favorites}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}
