import { test, expect } from "@playwright/test";

test("Should do login", async ({ page }) => {
  await page.goto("/");

  await page.getByText("Bienvenido").isVisible();

  await page.type("input[name=name]", "Pepa Pig");
  await page.type("input[name=password]", "1234");

  await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForURL("/loged", { timeout: 3000 });

  await page.getByRole("heading", { name: "Se ha logueado con exito" }).click();
  await page.getByRole("heading", { name: "nombre : Pepa Pig" }).click();
});
