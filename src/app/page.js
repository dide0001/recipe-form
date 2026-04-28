import Link from "next/link";
import Recipe from "./components/recipe";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-end">
          <Link
            href="/recipilist"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Go to recipes.
          </Link>
        </div>

        <Recipe />
      </div>
    </main>
  );
}
