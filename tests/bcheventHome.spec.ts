import test, { expect } from "@playwright/test";

test('homepage event', async ({ page }) => {
    test.setTimeout(200_000);
    await page.goto('https://staging-events.beachcomber-hotels.com/en/');

    // Dismiss cookie banner if present
    const cookieAccept = page.locator('button:has-text("I Accept")');
    if (await cookieAccept.isVisible()) {
        await cookieAccept.click();
    }

    //verifier le titre de la page
    await expect(page).toHaveTitle(/Homepage Event | Beachcomber/);
    //verifier les elements de slider
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/picture/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/h1')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/div/button')).toBeVisible();
    await page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/div/button').click();
    await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races');
    //verifer les elements de section "challenges"
    await page.goto('https://staging-events.beachcomber-hotels.com/en/');
    await expect(page.getByText('Challenges')).toBeVisible();

    //Challenges
    const titre = page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[1]/p');
  // Vérifier la police utilisée
  await expect(titre).toHaveCSS('font-family', /Montserrat/);
  // Vérifier la taille du texte
  await expect(titre).toHaveCSS('font-size', '20px');
  // Vérifier la graisse (bold, normal, etc.)
  await expect(titre).toHaveCSS('font-weight', '400');
  // Vérifier la couleur du texte
  await expect(titre).toHaveCSS('color', 'rgb(51, 51, 51)');

  //titre en gras
  const titreGras = page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[1]/h2');
  // Vérifier la police utilisée
  await expect(titreGras).toHaveCSS('font-family', /Montserrat/);
  // Vérifier la taille du texte
  await expect(titreGras).toHaveCSS('font-size', '40px');
  // Vérifier la graisse (bold, normal, etc.)
await expect(titreGras).toHaveCSS('font-weight', /(bold|400)/);


  // Vérifier la couleur du texte
  await expect(titreGras).toHaveCSS('color', 'rgb(51, 51, 51)');
  await expect(titreGras).toHaveCSS('text-align', 'center');

  //bloc picture
await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[2]/div/div[1]/div')).toBeVisible();

//scroll un peu vers le bas
await page.locator('body').press('PageDown');
await page.waitForTimeout(1000);

//bloc hotel
await expect(page.locator('//*[@id="hotels"]/div/div/div[1]/p')).toBeVisible({ timeout: 150000 });
await expect(page.locator('//*[@id="hotels"]/div/div/div[3]/button')).toBeVisible();
await page.locator('//*[@id="hotels"]/div/div/div[3]/button').click();
await expect(page).toHaveURL('https://www.beachcomber-hotels.com/en/hotels-mauritius');
//back
await page.goBack();

//scroll un peu vers le bas
await page.locator('body').press('PageDown');
await page.waitForTimeout(1000);

//formulaire
await page.goto('https://staging-events.beachcomber-hotels.com/en/');
await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[1]/p[1]')).toBeVisible();
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[1]/input').fill('test');
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[2]/input').fill('famille');
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[3]/input').fill('test@test.fr');
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[4]/textarea').fill('test playwright message long');
await page.locator('//*[@id="privacy-policy"]').check();
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[6]/button').click();

await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[1]/input')).toBeEmpty();
await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[2]/input')).toBeEmpty();
await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[3]/input')).toBeEmpty();
await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[4]/textarea')).toBeEmpty();
await expect(page.locator('//*[@id="privacy-policy"]')).not.toBeChecked();
await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[6]/div/p')).toHaveText('Your message has been sent successfully!');

//footer
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[1]/div[1]/div/button')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[2]/div/div/div[1]/h3/a')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[1]/div[1]/h3')).toHaveText('STAY CONNECTED AND GET EXCLUSIVE UPDATES');
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[2]/div/div/div[2]/h3/a')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[2]/div/div/div[3]/h3/a')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[2]/div/div/div[4]/h3/a')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[2]/div/div/div[5]/h3/a')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[2]/p')).toHaveText('© 2024 NEW MAURITIUS HOTELS LTD. All rights reserved. 沪ICP备13041005号-1');
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[2]/div/a[1]')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/footer/div/div[2]/div/a[2]')).toBeVisible();

//subscription et modal
await page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[1]/div[1]/div/button').click();
//fermer le modal
await page.locator('//*[@id="__next"]/div/footer/div[2]/div/button').click();
//reouvrir le modal
await page.locator('//*[@id="__next"]/div/footer/div/div[1]/div[1]/div[1]/div/button').click();
await expect(page.locator('//*[@id="SIGNUP_BODY_ALL"]/h1')).toHaveText('LIVE UNFORGETTABLE EXPERIENCES');
await expect(page.locator('//*[@id="SIGNUP_BODY_ALL"]/div[1]')).toHaveText('Be the first to hear about our special offers and exclusive deals.');
await page.locator('//*[@id="SIGNUP_BODY"]/div[1]/div[2]/div[1]/input').fill('test2@test.fr');
await page.locator('//*[@id="SIGNUP_BODY"]/div[1]/div[2]/div[2]/input').fill('olivier');
await page.locator('//*[@id="SIGNUP_BODY"]/div[1]/div[2]/div[3]/input').fill('QA');
await page.locator('//*[@id="780643000002793399"]').check();
await page.locator('//*[@id="780643000000041001"]').check(); 

// Localiser la checkbox par son name
await page.locator('//*[@id="SIGNUP_BODY"]/div[5]/label/input').check(); 
await expect(page.locator('input[name="PRIVACY_POLICY"]')).toBeChecked();


  //submit
await page.locator('//*[@id="zcWebOptin"]').click();
await page.goto('https://staging-events.beachcomber-hotels.com/en/');

});



//to run this specific test use npx playwright test tests/bchevent.spec.ts --headed --project=chromium
//npx playwright test tests/bchevent.spec.ts --project=chromium --reporter=html
//npx playwright show-report  to see the report   
//npx playwright test --list to see all tests
//npx playwright test --project=chromium  to run all tests in chromium
//npx playwright test --project=chromium --grep @smoke to run specific tests
//test.describe.configure({ mode: 'parallel' }); 