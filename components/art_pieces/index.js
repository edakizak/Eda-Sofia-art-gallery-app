import ArtPiecePreview from "../art-pieces-preview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <a key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            name={piece.name}
          />
        </a>
      ))}
    </>
  );
}
