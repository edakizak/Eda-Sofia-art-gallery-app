import ArtPiecePreview from "../ArtPiecePreview/ArtPiecesPreview.js";

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  console.log("ii", onToggleFavorite);
  return (
    <div>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            name={piece.name}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </li>
      ))}
    </div>
  );
}
