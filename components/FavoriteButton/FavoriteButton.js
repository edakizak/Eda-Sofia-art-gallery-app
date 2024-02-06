import Image from "next/image";

export default function FavoriteButton({ isFavorite, slug, onToggleFavorite }) {
  function onClick() {
    console.log("yeahh");
  }
  console.log("off", onToggleFavorite);
  return (
    <button
      type="button"
      // onToggleFavorite={onToggleFavorite}
      onClick={() => onToggleFavorite(slug)}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      {isFavorite ? (
        <Image src="/assets/heart.svg" width={40} height={40} alt="" />
      ) : (
        <Image src="/assets/filled.svg" width={40} height={40} alt="" />
      )}
    </button>
  );
}
