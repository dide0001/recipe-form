# Error messages for recipe form

This document describes possible validation errors for the recipe form.  
Validation is not implemented yet, but these messages can be used later.

## Recipe name

Field: `name`

Possible errors:

- Empty input
- Text is too short
- Text is too long

Error messages:

- Please enter a recipe name.
- The recipe name must be at least 3 characters long.
- The recipe name cannot be longer than 80 characters.

## Ingredients

Field: `ingredients`

Possible errors:

- Empty input
- Too few ingredients
- Ingredient text is too short

Error messages:

- Please add at least one ingredient.
- A recipe should include at least two ingredients.
- Each ingredient must be clearly written.

## Instructions

Field: `instructions`

Possible errors:

- Empty input
- Instructions are too short

Error messages:

- Please write the cooking instructions.
- The instructions must be detailed enough for someone to follow.

## Prep time

Field: `prepTimeMinutes`

Possible errors:

- Empty input
- Wrong datatype
- Number is too low

Error messages:

- Please enter the preparation time.
- Prep time must be written as a number.
- Prep time must be at least 1 minute.

## Cook time

Field: `cookTimeMinutes`

Possible errors:

- Empty input
- Wrong datatype
- Number is too low

Error messages:

- Please enter the cooking time.
- Cook time must be written as a number.
- Cook time must be at least 1 minute.

## Servings

Field: `servings`

Possible errors:

- Empty input
- Wrong datatype
- Number is too low

Error messages:

- Please enter how many servings the recipe makes.
- Servings must be written as a number.
- Servings must be at least 1.

## Difficulty

Field: `difficulty`

Possible errors:

- No option selected
- Invalid option

Error messages:

- Please choose a difficulty level.
- Difficulty must be Easy, Medium or Hard.

## Cuisine

Field: `cuisine`

Possible errors:

- Empty input
- Text is too short

Error messages:

- Please enter the cuisine type.
- Cuisine must be at least 2 characters long.

## Calories per serving

Field: `caloriesPerServing`

Possible errors:

- Empty input
- Wrong datatype
- Number is too low

Error messages:

- Please enter calories per serving.
- Calories must be written as a number.
- Calories must be higher than 0.

## Tags

Field: `tags`

Possible errors:

- Empty input
- Tag is too short

Error messages:

- Please add at least one tag.
- Tags must be clear and relevant.

## Meal type

Field: `mealType`

Possible errors:

- Empty input
- Invalid meal type

Error messages:

- Please choose a meal type.
- Meal type must match a relevant category, for example breakfast, lunch, dinner or snack.

## Image

Field: `image`

Possible errors:

- Empty input
- Invalid URL

Error messages:

- Please add an image URL.
- The image must be a valid URL.
