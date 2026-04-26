export default function Home() {
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

        <form className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              Recipe name
            </label>
            <input
              type="text"
              placeholder="Classic Margherita Pizza"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Ingredients
            </label>
            <textarea
              placeholder="Pizza dough, tomato sauce, mozzarella..."
              className="min-h-32 w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Instructions
            </label>
            <textarea
              placeholder="Preheat oven, prepare dough, add toppings..."
              className="min-h-40 w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">
                Prep time
              </label>
              <input
                type="number"
                placeholder="20"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Cook time
              </label>
              <input
                type="number"
                placeholder="15"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Difficulty
            </label>
            <select className="w-full rounded-lg border px-4 py-3">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <button className="rounded-lg bg-black px-6 py-3 font-medium text-white">
            Create recipe
          </button>
        </form>
      </section>
    </main>
  );
}
