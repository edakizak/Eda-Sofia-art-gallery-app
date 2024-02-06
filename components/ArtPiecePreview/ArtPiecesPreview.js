import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  artist,
  name,
  onToggleFavorite,
  isFavorite,
}) {
  console.log("ll", onToggleFavorite);
  return (
    <>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        // onClick={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
      />

      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} height={144} width={144} alt={name} />
        <h2>
          {name}
          <br />
          {artist}
        </h2>
      </Link>
    </>
  );
}
