import { test, expect } from '@playwright/test';

test('homepage event', async ({ page }) => {
    test.setTimeout(200_000);
    await page.goto('https://staging-events.beachcomber-hotels.com/en/');
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

//bloc hotel
await expect(page.locator('//*[@id="257659"]/div')).toBeVisible();
await expect(page.locator('//*[@id="257659"]/div/div/div[3]/button')).toBeVisible();
await page.locator('//*[@id="257659"]/div/div/div[3]/button').click();
await expect(page).toHaveURL('https://www.beachcomber-hotels.com/en/hotels-mauritius');

//formulaire
await page.goto('https://staging-events.beachcomber-hotels.com/en/');
await expect(page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[1]/p[1]')).toBeVisible();
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[1]/input').fill('test');
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[2]/input').fill('famille');
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[3]/input').fill('test@test.fr');
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[4]/textarea').fill('test playwright message long');
await page.locator('//*[@id="privacy-policy"]').check();
await page.locator('//*[@id="__next"]/div/main/div[3]/section/div/div/div[2]/div/div[2]/form/div[6]/button').click();


});