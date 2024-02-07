import Image from "next/image";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: inherit;
  margin: 5 px;
  align-items: flex-start;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // if (typeof onToggleFavorite !== "function") {
  //   console.error("onToggleFavorite is not a function", onToggleFavorite);
  //   return null;
  // }

  return (
    <Button
      type="button"
      // onToggleFavorite={onToggleFavorite}
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image
        src={isFavorite ? "/assets/filledicon.svg" : "/assets/unfilledicon.svg"}
        width={40}
        height={40}
        alt={isFavorite ? "Liked" : "Not liked"}
      />
    </Button>
  );
}
