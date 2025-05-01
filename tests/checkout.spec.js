// @ts-check
import { test, expect } from '@playwright/test';

test.setTimeout(600000)

test('Add to cart & Checkout & remove from cart', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Final Project/);

    const userAccountIcon = page.getByTestId("Header-userAccount")
    await userAccountIcon.click()

    await page.waitForTimeout(5000)


    const signupBtn = page.getByRole("menuitem").first()
    await signupBtn.click()

    await page.waitForTimeout(5000)

   
    await expect(page).toHaveURL("http://localhost:5173/signin")

    const emailInput =page.getByTestId("email").locator("input")
    await emailInput.fill("test2024@test.com")

    const passwordInput=page.getByTestId("password").locator("input")
    await passwordInput.fill("Abcd1234*")

    const submitButton= page.getByTestId("submit")
    await submitButton.click()

    await page.waitForURL("http://localhost:5173/welcome")
    await expect(page).toHaveURL("http://localhost:5173/welcome")

    await page.waitForTimeout(5000)


    const moveToHomePage = page.getByText("Go to Home Page")
    await moveToHomePage.click()

    await page.waitForURL("http://localhost:5173/")
    await expect(page).toHaveURL("http://localhost:5173/")

    await page.waitForTimeout(5000)


    const openProduct = page.getByText("Puma T-shirt")
    await openProduct.click()

    await page.waitForURL("http://localhost:5173/product/3")
    await expect(page).toHaveURL("http://localhost:5173/product/3")

    await page.waitForTimeout(5000)

    const addToBag = page.getByText("Add to bag")
    await addToBag.click()

    await page.waitForTimeout(5000)


    const openCart = page.getByTestId("cart")
    await openCart.click()

    await page.waitForTimeout(5000)


    const openCheckoutPage = page.getByText("Place Order")
    await openCheckoutPage.click()

    await page.waitForURL("http://localhost:5173/checkout")
    await expect(page).toHaveURL("http://localhost:5173/checkout")

    await page.waitForTimeout(5000)


    await openCart.click()

    const removeFromCart = page.getByTestId("removeBtn")
    await removeFromCart.click()

    await page.waitForTimeout(3000)
});