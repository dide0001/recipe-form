export default function RecipeList({
  recipes = [],
}) {
  if (!recipes.length) {
    return (
      <section className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold">
          Recipe list
        </h2>
        <p className="text-neutral-600">
          No recipes have been added yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Recipe list
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="rounded-xl border p-5"
          >
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.name}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
            )}

            <h3 className="text-xl font-semibold">
              {recipe.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {recipe.difficulty && (
                <span className="rounded-full bg-neutral-100 px-3 py-1">
                  {recipe.difficulty}
                </span>
              )}

              {recipe.cuisine && (
                <span className="rounded-full bg-neutral-100 px-3 py-1">
                  {recipe.cuisine}
                </span>
              )}

              <span className="rounded-full bg-neutral-100 px-3 py-1">
                {recipe.prepTimeMinutes +
                  recipe.cookTimeMinutes}{" "}
                min
              </span>
            </div>

            {recipe.ingredients?.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-1 font-medium">
                  Ingredients
                </h4>
                <ul className="list-inside list-disc text-sm text-neutral-700">
                  {recipe.ingredients
                    .slice(0, 4)
                    .map((ingredient, index) => (
                      <li key={index}>
                        {ingredient}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
