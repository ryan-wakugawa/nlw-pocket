import { URL } from "../url";

export async function createGoalCompletion(goalId: string) {
  await fetch(`${URL}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  });
}
