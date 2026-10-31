"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./FD";
import { revalidatePath } from "next/cache";

function isValidText(text) {
  return !text || text.trim() === "";
}

export async function Save_Price(prevState, formData) {
  const PRICE = {
    activate: formData.get("activate"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    price: formData.get("price"),
  };
  if (
    isValidText(PRICE.activate) ||
    isValidText(PRICE.title) ||
    isValidText(PRICE.subtitle) ||
    isValidText(PRICE.price)
  ) {
    // throw new Error("incalid input!!!");
    return {
      message: "Ungültige Eingabe!!!",
    };
  }
  // await saveMeal(meal);
  // revalidatePath("/meals");
  // redirect("/meals");
}
