// @ts-check
import { test, expect } from '@playwright/test';

test('Sign up', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Final Project/);

    const userAccountIcon = page.getByTestId("Header-userAccount")
    await userAccountIcon.click()

    const signupBtn = page.getByRole("menuitem").last()
    await signupBtn.click()

    await expect(page).toHaveURL("http://localhost:5173/signup")

    await page.waitForTimeout(3000)
});

