import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Link from "next/link";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  return (
    <>
      <Image src={image} height={144} width={144} alt={name} />
      <h2> {name} </h2>
      <p> {year}</p>
      <p> {genre}</p>
      <p> {artist}</p>

      <CommentForm />
      <Link href="/art-pieces">
        <button>← Go Back</button>
      </Link>
    </>
  );
}
