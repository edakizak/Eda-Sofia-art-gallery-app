import ArtPieceDetails from "@/components/art-piece-details";
import { useRouter } from "next/router";

export default function ArtDetails({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log("pieces", pieces);
  console.log(selectedArtPiece);
  return <ArtPieceDetails>piece = {selectedArtPiece}</ArtPieceDetails>;
}
