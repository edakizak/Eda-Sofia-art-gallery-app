import Image from "next/image";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  return (
    <>
      <Image src={image} height={144} width={144} alt={name} />
      <h2> {name} </h2>
      <p> {year}</p>
      <p> {genre}</p>
      <p> {artist}</p>
      {/* <FavoriteButton>
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      </FavoriteButton> */}
    </>
  );
}
