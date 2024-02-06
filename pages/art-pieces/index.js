import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesList({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
