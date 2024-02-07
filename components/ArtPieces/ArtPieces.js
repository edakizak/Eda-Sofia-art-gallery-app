import ArtPiecePreview from "../ArtPiecePreview/ArtPiecesPreview.js";
import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <div key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            name={piece.name}
            slug={piece.slug}
            isFavorite={
              artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                ?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
          />
        </div>
      ))}
    </List>
  );
}
