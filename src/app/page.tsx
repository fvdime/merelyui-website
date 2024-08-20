import { Link } from "merelyui";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-4 justify-center items-center text-white text-xl">
      <h1>MerelyUI</h1>
      <h1>Coming Soon</h1>
      <Link href="/components/installation" label="DOCS" secondary large/>
    </main>
  );
}
