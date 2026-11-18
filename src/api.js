import { ApiError, HttpError, NotFoundError, NetworkError } from "./errors.js";
const URL = "https://dummyjson.com/recipes/";
export async function getRecipe(id) {
  try {
    const response = await fetch(`${URL}${id}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError(id);
      }
      throw new HttpError("Erreur du serveur", response.status);
    }
    const recipe = await response.json();

    return recipe;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new NetworkError("Probleme de connexion", error);
  }
}
console.log(await agetRecipe(4));
