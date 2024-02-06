import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  color,
}) {
  const router = useRouter();

  return (
    <>
      <Image src={image} height={144} width={144} alt={name} />
      <h2> {name} </h2>
      <p> {year}</p>
      <p> {genre}</p>
      <p> {artist}</p>
    </>
  );
}
