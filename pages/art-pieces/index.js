import ArtPieces from "@/components/art_pieces";

export default function ArtPiecesList({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
