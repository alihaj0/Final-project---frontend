// @ts-check
import { test, expect } from '@playwright/test';

test('Sign-in', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Final Project/);

    const userAccountIcon = page.getByTestId("Header-userAccount")
    await userAccountIcon.click()

    const signupBtn = page.getByRole("menuitem").first()
    await signupBtn.click()
   
    await expect(page).toHaveURL("http://localhost:5173/signin")

    const emailInput =page.getByTestId("email").locator("input")
    await emailInput.fill("test2024@test.com")

    const passwordInput=page.getByTestId("password").locator("input")
    await passwordInput.fill("Abcd1234*")

    const submitButton= page.getByTestId("submit")
    await submitButton.click()

    await page.waitForURL("http://localhost:5173/welcome")
    await expect(page).toHaveURL("http://localhost:5173/welcome")
});

