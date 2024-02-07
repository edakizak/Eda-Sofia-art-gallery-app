import ArtPiecePreview from "../ArtPiecePreview/ArtPiecesPreview.js";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Courier";
  h1 {
    font-family: "Courier";
    align-items: center;
  }
`;
const List = styled.ul`
  list-style: none;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <Container>
      <h1>Art Gallery</h1>
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
    </Container>
  );
}
