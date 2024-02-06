import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function ArtPiecePreview({ slug, image, artist, name }) {
  return (
    <>
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
