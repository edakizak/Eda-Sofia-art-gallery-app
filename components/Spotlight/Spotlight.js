import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  name,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <Image src={image} height={144} width={144} alt={name} />
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
  );
}
