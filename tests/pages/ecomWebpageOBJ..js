
class Ecomwebpage{
constructor(page){
this.page=page

}

sizeoptions() {

    return this.page.getByText('XS')

}

 validationResults() {
    return this.page.locator('//p[contains(text(),"Black Batman T-shirt")]');
  }

  Addproducttothecart() {

return this.page.locator('//div[@class="sc-124al1g-2 kaJsVi"]/button')

  }

  
   blackbatmantshirtinthecart() {
    return this.page.locator('//div[@class="sc-11uohgb-0 hDmOrM"]//p[contains(text(),"Black Batman T-shirt")]');
  }

  removeproductfromcart() {


    return this.page.locator('//button[@title="remove product from cart"]')
  }

   productNotVisible() {
    return this.page.locator('//div[@class="sc-11uohgb-0 hDmOrM"]//p[contains(text(),"Black Batman T-shirt")]');
  }
sizeSoption(){
return this.page.getByText('S', { exact: true })
}
   addproduct1tothecart() {
return this.page.locator('//div[@class="sc-124al1g-2 kaJsVi"]/button')
   }
   
   addproduct2tothecart() {

        return this.page.locator('//div[@class="sc-124al1g-2 gwkgbw"]/button')

    }

   validatetotalamountiscorrect() {

return this.page.locator('//div[@class="sc-1h98xa9-12 fqwdnu"]//p[contains(text(),"$ 33.40")]')
  }

  checkout() {
return this.page.locator('//button[contains(text(),"Checkout")]')
  }
async clicksizeoptions() {

await this.sizeoptions().click();

}

async clickaddtocart() {

await this.Addproducttothecart().click()

}


async clickremoveproductfromcart() {

    await this.removeproductfromcart().click()
}

async clickproduct1and2tothecart() {
await this.addproduct1and2tothecart().click()


}
async clickAddProduct1And2ToTheCart() {

await this.addproduct1tothecart().click()
await this.addproduct2tothecart().click()
}

async clickcheckout() {
await this.checkout().click()


}

async clicksizeSoption(){

await this.sizeSoption().click()



}




}




module.exports=Ecomwebpage;