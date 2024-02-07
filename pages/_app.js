import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout.js";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // console.log("slug", slug);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    console.log("######## handleToggleFavorite ########");
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    console.log("artPiecesInfo: ", artPiecesInfo);
    console.log("slug: ", slug);
    console.log("artPiece: ", artPiece);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  // console.log("favorite", handleToggleFavorite);
  // console.log("data", data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
