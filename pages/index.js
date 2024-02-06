import Spotlight from "@/components/Spotlight/Spotlight.js";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPage = pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <div>
      <Spotlight
        image={spotlightPage.imageSource}
        artist={spotlightPage.artist}
        name={spotlightPage.name}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === spotlightPage.slug)
            ?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(spotlightPage.slug)}
      />
    </div>
  );
}
