import ArtPiecePreview from "../ArtPiecePreview/ArtPiecesPreview.js";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <div>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            name={piece.name}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </div>
  );
}
