import { test, expect, webkit } from '@playwright/test';
test.skip(({ browserName }) => browserName !== 'chromium', 'Exécuté uniquement sur Chromium');

test('test', async ({ page }) => {
  test.setTimeout(200000);
  try{
     await page.goto('https://sicom-stg.sitefinity.cloud/');
     await expect (page.locator('xpath=//*[@id="bodycontent"]/main/section[1]/div[3]/div/div/h1')).toContainText('future');
     await expect (page.locator('xpath=//*[@id="bodycontent"]/header/div/div/div[2]/div[3]/nav/ul/li[1]/a')).toBeVisible();
     await page.locator('xpath=//*[@id="bodycontent"]/header/div/div/div[2]/div[3]/nav/ul/li[1]/a').click();
     await expect (page.locator('xpath=/html/body/header/div/div/div[2]/div[3]/nav/ul/li[1]/div/div/div[2]/div[1]/div/a')).toBeVisible();
     await page.locator('xpath=//*[@id="bodycontent"]/header/div/div/div[1]/a[2]/img').click();
     await page.goto('https://sicom-stg.sitefinity.cloud/portal/login ');
     await expect(page.getByText('Welcome')).toBeVisible();
     await page.locator('xpath=//*[@id="email"]').fill('krishen.goinden@outlook.com');
     await page.locator('xpath=//*[@id="password"]').fill('0000');
     await page.locator('xpath=//*[@id="login_section"]/form/div[2]/div[3]/div/div/label').check();
     await page.locator('xpath=//*[@id="button_submit_login"]').click();
     await expect(page).toHaveTitle(/.*Home/ ,{ timeout: 80_000 });
     await page.locator('xpath=//*[@id="mCSB_6_container"]/tr[3]/td[5]/a').click({ timeout: 150000 });
     await expect(page).toHaveTitle(/.*Policy/ ,{ timeout: 12000 });

     const tab = page.getByRole('tab', { name: 'Outstanding Dues' });
     await tab.click({ timeout: 10000 });

     await expect(page.locator('xpath=//*[@id="out-standing-due"]')).toBeVisible({ timeout: 120000 });

     try {
  await page.locator('#loader_dues').waitFor({ state: 'hidden', timeout: 200000 });
} catch (e) {
  console.warn('⚠️ Loader toujours visible après 15s, on continue quand même');
}


     const bouton = page.locator('xpath=//*[@id="container_amount_total"]');
     await expect(bouton).toBeVisible({ timeout: 200000 }); // attendre qu’il apparaisse
     //await expect(bouton).toBeEnabled({ timeout: 80_000 });
     await page.locator('xpath=//*[@id="container_outstading"]/tbody/tr[1]/td[6]/div/label').check();
     await expect(bouton).toBeEnabled({ timeout: 80_000 });
     await bouton.click();

     //modal checkout affiché?
    
     const modal = page.locator('#popcheckout');
  await modal.waitFor({ state: 'visible' });

  // 4. Vérifier que le modal est bien affiché
  await expect(modal).toBeVisible();
     //Titre modal visible ? 
     await expect(page.locator('xpath=//*[@id="popcheckout"]/div/div/div/h3')).toBeVisible({ timeout: 150000 });

     //cliquer Pay now
    await page.locator('#sendPaymentArrears').click();

     //Choisir carte de paiement

     // Attendre que le bouton CNP apparaisse
    

  const cnpButton = page.locator("//button[@data-testid='checkout-CNP-button']");
  await cnpButton.waitFor({ state: 'visible', timeout: 150000 });

  // Cliquer sur CNP
  await cnpButton.click();

// Card
      // Attendre que l'iframe soit présent

   try {
     // Sélectionner l'iframe parent
const parentFrame = page.frameLocator("//iframe[@id='chk-if-30394']");

// Sélectionner l'iframe enfant à l'intérieur de l'iframe parent
const cardFrame = parentFrame.frameLocator("//iframe[@name='card.number']");

// Remplir le champ Card Number
await cardFrame.locator("input[name='card.number']").fill("424242424242");

} catch (e) {
  console.warn('⚠️ Loader toujours visible après 15s, on continue quand même');
}
 
     
  


     console.log('Ok test passé');
     }
  catch (error) {
    console.log('❌ KO - Le test a échoué');
    throw error; // Important : re-throw pour que le test soit marqué comme échoué
  }

});
