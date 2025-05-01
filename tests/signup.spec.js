// @ts-check
import { test, expect } from '@playwright/test';
import { generateRandomEmail, generateRandomFirstName, generateRandomLastName } from './helpers.js';

test('Sign up', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Final Project/);

    const userAccountIcon = page.getByTestId("Header-userAccount")
    await userAccountIcon.click()

    const signupBtn = page.getByRole("menuitem").last()
    await signupBtn.click()
   
    await expect(page).toHaveURL("http://localhost:5173/signup")

    const firstName= generateRandomFirstName()
    const lastName= generateRandomLastName()
    const email=generateRandomEmail()

    const firstNameInput = page.getByTestId("firstName").locator("input")
    await firstNameInput.fill(firstName)

    const lastNameInput =page.getByTestId("lastName").locator("input")
    await lastNameInput.fill(lastName)

    const emailInput =page.getByTestId("email").locator("input")
    await emailInput.fill(email)

    const passwordInput=page.getByTestId("password").locator("input")
    await passwordInput.fill("Abcd1234*")

    const submitButton= page.getByTestId("submit")
    await submitButton.click()
});

