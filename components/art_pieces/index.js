import ArtPiecePreview from "../art-pieces-preview";
import { useRouter } from "next/router";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <a key={piece.slug} href="/art-piece-details">
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
