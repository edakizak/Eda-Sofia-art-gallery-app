// import Image from "next/image";
import Heart from "../../public/assets/filled.svg";
import HeartFilled from "../../public/assets/unfilled.svg";

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

//   if (!isFavorite) {
//     return (
//       <Heart
//         className="button button__favorite--unactive"
//         width="50"
//         height="50"
//         onClick={() => {
//           onToggleFavorite(slug);
//         }}
//       />
//     );
//   } else {
//     <HeartFilled
//       className="button__favorite--active"
//       width="50"
//       height="auto"
//       onClick={() => {
//         onToggleFavorite(slug);
//       }}
//     />;
//   }
// }
