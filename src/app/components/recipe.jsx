"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

async function createRecipe(prevState, formData) {
  const recipe = {
    name: formData.get("name"),
    ingredients: formData
      .get("ingredients")
      .split(",")
      .map((ingredient) => ingredient.trim()),
    instructions: formData
      .get("instructions")
      .split(".")
      .map((step) => step.trim())
      .filter((step) => step !== ""),
    prepTimeMinutes: Number(
      formData.get("prepTime")
    ),
    cookTimeMinutes: Number(
      formData.get("cookTime")
    ),
    difficulty: formData.get("difficulty"),
  };

  try {
    const res = await fetch(
      "https://dummyjson.com/recipes/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    );

    if (!res.ok) {
      return {
        success: false,
        message:
          "Something went wrong. Try again.",
      };
    }

    const data = await res.json();

    return {
      success: true,
      message: "Recipe created successfully",
      recipe: data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Could not connect to the API.",
    };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-black px-6 py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-neutral-400"
    >
      {pending ? "Creating..." : "Create recipe"}
    </button>
  );
}

export default function Recipe() {
  const [state, formAction] = useActionState(
    createRecipe,
    null
  );

  useEffect(() => {
    if (state?.success && state?.recipe) {
      const savedRecipes =
        JSON.parse(
          localStorage.getItem("recipes")
        ) || [];
      const updatedRecipes = [
        state.recipe,
        ...savedRecipes,
      ];

      localStorage.setItem(
        "recipes",
        JSON.stringify(updatedRecipes)
      );
    }
  }, [state]);

  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-12">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-3xl font-bold">
          Create new recipe
        </h1>
        <p className="mb-8 text-neutral-600">
          Fill out the form below to create a new
          recipe.
        </p>

        <form
          action={formAction}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium"
            >
              Recipe name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Classic Margherita Pizza"
              className="w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          <div>
            <label
              htmlFor="ingredients"
              className="mb-2 block font-medium"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Pizza dough, tomato sauce, mozzarella..."
              className="min-h-32 w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="mb-2 block font-medium"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="Preheat oven, prepare dough, add toppings..."
              className="min-h-40 w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="prepTime"
                className="mb-2 block font-medium"
              >
                Prep time
              </label>
              <input
                id="prepTime"
                name="prepTime"
                type="number"
                placeholder="20"
                className="w-full rounded-lg border px-4 py-3"
                required
              />
            </div>

            <div>
              <label
                htmlFor="cookTime"
                className="mb-2 block font-medium"
              >
                Cook time
              </label>
              <input
                id="cookTime"
                name="cookTime"
                type="number"
                placeholder="15"
                className="w-full rounded-lg border px-4 py-3"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="mb-2 block font-medium"
            >
              Difficulty
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className="w-full rounded-lg border px-4 py-3"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <SubmitButton />

          {state?.message && (
            <div
              className={`rounded-lg px-4 py-3 ${
                state.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <p>{state.message}</p>

              {state?.recipe && (
                <div className="mt-3 rounded-lg bg-white p-4 text-sm text-neutral-700">
                  <p>
                    <span className="font-medium">
                      Name:
                    </span>{" "}
                    {state.recipe.name}
                  </p>
                  <p>
                    <span className="font-medium">
                      Difficulty:
                    </span>{" "}
                    {state.recipe.difficulty}
                  </p>
                  <p>
                    <span className="font-medium">
                      Total time:
                    </span>{" "}
                    {state.recipe
                      .prepTimeMinutes +
                      state.recipe
                        .cookTimeMinutes}{" "}
                    minutes
                  </p>
                </div>
              )}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
