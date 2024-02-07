import ArtPiecePreview from "../ArtPiecePreview/ArtPiecesPreview.js";
// const { slug } = router.query;

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            name={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
            artPiecesInfo={artPiecesInfo}
            // isFavorite={
            //   artPiecesInfo.find(
            //     (piece) => piece.slug === selectedArtPiece.slug
            //   )?.isFavorite
            // }
            // onToggleFavorite={() => onToggleFavorite(selectedArtPiece.slug)}
          />
        </li>
      ))}
    </div>
  );
}
