import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log("data", data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <>
      <GlobalStyle />
      <Layout />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </>
  );
}
