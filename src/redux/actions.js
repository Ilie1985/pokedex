export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavourite = (pokemon) => ({
  type: TOGGLE_FAVORITE,
  payload: pokemon,
});
