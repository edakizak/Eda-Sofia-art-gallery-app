import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails.js";
import { useRouter } from "next/router";

export default function ArtDetails({ data, artPiecesInfo, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedArtPiece = data.find((piece) => piece.slug === slug);
  console.log("data", data);
  console.log("slug", slug);
  console.log("Selected Art Piece", selectedArtPiece);
  return (
    <>
      <ArtPieceDetails
        data={selectedArtPiece}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={() => onToggleFavorite(selectedArtPiece.slug)}
        image={selectedArtPiece.imageSource}
        name={selectedArtPiece.name}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
        artist={selectedArtPiece.artist}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === selectedArtPiece.slug)
            ?.isFavorite
        }
      />
    </>
  );
}
