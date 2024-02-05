import useSWR from "swr";

const url = "https://example-apis.vercel.app/api/art";
export default function HomePage() {
  const { data, error, isLoading } = useSWR(url);
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
