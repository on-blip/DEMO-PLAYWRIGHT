import { test, expect } from '@playwright/test';

test('homepage event', async ({ page }) => {
    test.setTimeout(200000);
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
    const titre = page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[1]/p');

  // Vérifier la police utilisée
  await expect(titre).toHaveCSS('font-family', /Montserrat/);


  // Vérifier la taille du texte
  await expect(titre).toHaveCSS('font-size', '20px');

  // Vérifier la graisse (bold, normal, etc.)
  //await expect(titre).toHaveCSS('font-weight', '700');

  // Vérifier la couleur du texte
  await expect(titre).toHaveCSS('color', 'rgb(51, 51, 51)');
});