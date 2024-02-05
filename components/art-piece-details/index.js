import Image from "next/image";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  return (
    <a piece={piece}>
      <Image src={image} height={144} width={144} alt={name} />
      <h2>
        <p>Name: {piece.name}</p>
        <p>Year: {piece.year}</p>
        <p>Genre: {piece.genre}</p>
        <p>Color: {piece.color}</p>
      </h2>
    </a>
  );
}
