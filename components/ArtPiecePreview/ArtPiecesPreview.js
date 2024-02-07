import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import styled from "styled-components";

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #d1f90c;
    text-decoration: none;
  }
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
          <Image
            className="art-pieces-image"
            src={image}
            height={400}
            width={600}
            alt={name}
          />
          {/* <h3 className="art-pieces-name">{name}</h3>
          <h3 className="art-pieces-artist">{artist}</h3> */}
          <h2>
            {name} <br />
            {artist}
          </h2>
        </Link>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={slug}
          isFavorite={isFavorite}
        />
      </Card>
    </>
  );
}
