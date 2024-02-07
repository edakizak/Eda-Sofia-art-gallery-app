import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesList({
  data,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieces
        pieces={data}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      ;
    </>
  );
}
