import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import styled from "styled-components";
const Card = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    color: black;
    text-decoration: none;
  }
`;
const StyledImage = styled(Image)`
  margin-top: 50px;
  margin-bottom: 20px;
`;
export default function ArtPiecePreview({
  slug,
  image,
  artist,
  name,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <Card>
        <Link href={`/art-pieces/${slug}`}>
          <StyledImage
            className="art-pieces-image"
            src={image}
            height={500}
            width={500}
            alt={name}
          />
        </Link>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={slug}
          isFavorite={isFavorite}
        />
        <h2>
          {name} <br />
          {artist}
        </h2>
      </Card>
    </>
  );
}
