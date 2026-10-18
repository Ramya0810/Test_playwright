import{test,expect} from "@playwright/test";
test("Dropdown handling", async({page})=>{
    await page.goto("https://leafground.com/select.xhtml");


    await page.locator("select.ui-selectonemenu").selectOption("Selenium");

    await page.locator("//label[text()='Select Country']").click();
     await page.getByRole("option", { name: "India" }).click();

     await page.locator("//label[text()='Select City']").click();
     await page.getByRole("option", { name: "Delhi" }).click();

     await page.getByRole("textbox", { name: "Choose Course" }).fill("playwright")

     await page.locator("//label[text()='Select Language']").click();
     await page.getByRole("option", { name: "Tamil" }).click();
    
     await page.locator("//label[text()='Select Values']").click();
        await page.getByRole("option", { name: "Two" }).click();
    await page.waitForTimeout(12000);
})