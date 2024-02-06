import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // if (typeof onToggleFavorite !== "function") {
  //   console.error("onToggleFavorite is not a function", onToggleFavorite);
  //   return null;
  // }

  return (
    <button
      type="button"
      // onToggleFavorite={onToggleFavorite}
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image
        src={isFavorite ? "/assets/filled.svg" : "/assets/unfilled.svg"}
        width={40}
        height={40}
        alt={isFavorite ? "Liked" : "Not liked"}
      />
    </button>
  );
}
