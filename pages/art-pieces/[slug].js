import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtDetails({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedArtPiece = data.find((piece) => piece.slug === slug);
  console.log("slug", slug);
  console.log("Selected Art Piece", selectedArtPiece);
  return (
    <ArtPieceDetails
      data={selectedArtPiece}
      image={selectedArtPiece.imageSource}
      name={selectedArtPiece.name}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
      artist={selectedArtPiece.artist}
    />
  );
}
