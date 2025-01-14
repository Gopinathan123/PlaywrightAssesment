import {test} from "@playwright/test";

test("Add items to cart", async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator("input[title*='Search for Products']").fill("laptops");
    await page.locator("input[title*='Search for Products']").press("Enter");  
})