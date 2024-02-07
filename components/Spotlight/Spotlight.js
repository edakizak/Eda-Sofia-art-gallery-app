import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Courier";
  justify-content: center;
`;
export default function Spotlight({
  image,
  artist,
  name,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Container>
      <div>
        <h1>Spotlight</h1>
        <Image src={image} height={300} width={400} alt={name} />
        <h2>
          {name}
          <br />
          {artist}
        </h2>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </Container>
  );
}
