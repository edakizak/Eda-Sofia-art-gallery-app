import Image from "next/image";

export default function Spotlight({ image, artist, name }) {
  return (
    <div>
      <Image src={image} height={144} width={144} alt={name} />
      <h2>
        {name}
        <br />
        {artist}
      </h2>
    </div>
  );
}
