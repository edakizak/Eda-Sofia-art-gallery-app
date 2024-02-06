import ArtPiecePreview from "../ArtPiecePreview/ArtPiecesPreview.js";
import styled from "styled-components";
// import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

// export default function ArtPieces({
//   pieces,
//   onToggleFavorite,
//   isFavorite,
//   slug,
// }) {
//   return (
//     <div>
//       {pieces.map((piece) => (
//         <li key={piece.slug}>
//           <ArtPiecePreview
//             image={piece.imageSource}
//             artist={piece.artist}
//             slug={piece.slug}
//             name={piece.name}
//             // onToggleFavorite={onToggleFavorite}
//           />
//         </li>
//       ))}
//       <FavoriteButton
//         onToggleFavorite={onToggleFavorite}
//         slug={slug}
//         isFavorite={isFavorite}
//       />
//     </div>
//   );
// }
const List = styled.ul`
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 10rem;
    height: 30rem;
  }
`;
export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={
              artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                ?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
          />
        </li>
      ))}
    </List>
  );
}
