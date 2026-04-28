"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import RecipeList from "../components/recipelist";

export default function RecipiListPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes =
      JSON.parse(
        localStorage.getItem("recipes")
      ) || [];
    setRecipes(savedRecipes);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex justify-end">
          <Link
            href="/"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Back to form
          </Link>
        </div>

        <RecipeList recipes={recipes} />
      </div>
    </main>
  );
}
