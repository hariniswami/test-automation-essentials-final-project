
import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const webpage=require ('../pages/ecomWebpageOBJ.')
const { Given , When , Then } =  createBdd();

Given('I navigate to the website', async ({page}) => {
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/')
  });
  
  
  When('I click the size options', async ({page}) => {
   const Epage=new webpage(page);
   await Epage.clicksizeoptions()
  });
  

  Then('I validate the results are showing the criteria you selected.', async ({page}) => {
const validationdisplay=new webpage(page);
await page.pause()
await expect(validationdisplay.validationResults()).toBeVisible();


  });
  
  When('I Add a product to the cart', async ({page}) => {
  const Epage=new webpage(page);
 await Epage.clickaddtocart()
   
  });

  Then('I validate it is there', async ({page}) => {
const validateresults=new webpage(page)
await expect(validateresults.blackbatmantshirtinthecart()).toBeVisible();
  });
  
  When('I Remove a product from the cart', async ({page}) => {
    const Epage=new webpage(page)
   await Epage.clickremoveproductfromcart()
  });
  
  Then('I validate it is not there.', async ({page}) => {
    const validateproductnotvisible=new webpage(page)
   await expect(validateproductnotvisible.productNotVisible()).toBeHidden();

  });
  
When(/^I click size S$/, async({page}) => {
	const Epage=new webpage(page)
  await Epage.clicksizeSoption()
});

  When('I Add more than one product to the cart', async ({page}) => {
 const Epage=new webpage(page)
 await Epage.clickAddProduct1And2ToTheCart()
  });
  

  Then('I validate the total price is correct.', async ({page}) => {
const carttotal=new webpage(page)
await expect(carttotal.validatetotalamountiscorrect()).toBeVisible();
  });
  

  
When(/^I Complete the purchase$/,async ({page}) => {
const Epage=new webpage(page)
await Epage.clickcheckout()
});



Then(/^I validate my purchase is succesfull$/,async ({page}) => {

  page.on('dialog', async dialog => {
    const dialogText = dialog.message();
     expect(dialogText).toContain('Checkout - Subtotal: $ 33.10');
     dialog.accept();
  });
});

