import { test, expect } from '@playwright/test';


test('page races', async ({ page }) => {
    test.setTimeout(200000);
    await test.step('Accéder à la page Trail 2025 et vérifier le titre', async () => {
    await page.goto('https://staging-events.beachcomber-hotels.com/en/races');
    await expect(page).toHaveTitle('Trail 2025 | Beachcomber');
    });

    await test.step('accepter le cookie', async () => {
     // accepter les cookies
    const cookieAccept = page.locator('button:has-text("I Accept")');
    if (await cookieAccept.isVisible()) {
        await cookieAccept.click();
    }
});

await test.step('Vérification menus actifs', async () => {
    //menu active
    const activeMenu = page.locator('div.menu-item.active');
await expect(activeMenu).toHaveClass(/active/);
await expect(activeMenu).toHaveText('Races');
});

await test.step('Vérification des éléments du slider et de la section Overview of the Beachcomber Trail', async () => {

//verifier les elements de slider
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/picture/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/h1')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/p[1]')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/p[2]')).toBeVisible();
});

await test.step('section Overview of the Beachcomber Trail', async () => {
    //section Overview of the Beachcomber Trail 
    await expect(page.getByText('Overview of the Beachcomber Trail')).toBeVisible();
    const overview = page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/p[2]');  
    // Vérifier la police utilisée
    await expect(overview).toHaveCSS('font-family', /Montserrat/);
    // Vérifier la taille du texte
    await expect(overview).toHaveCSS('font-size', '20px');
    // Vérifier la graisse (bold, normal, etc.)
    await expect(overview).toHaveCSS('font-weight', '400');
    // Vérifier la couleur du texte
    await expect(overview).toHaveCSS('color', 'rgb(51, 51, 51)'); 
    await expect(overview).toHaveCSS('text-align', 'center');

});

await test.step('Vérification du bouton Read More et de son fonctionnement', async () => {
    //scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll

    //vérifier  read more et cliquer
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[1]/div/button')).toBeVisible();
    await page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[1]/div/button').click();
    //fermer read more
    await page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[3]/button').click();
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[2]/p')).toBeHidden();
    //nom de bouton changer après le clic
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div[1]/div/button')).toHaveText('Read More');
});

await test.step('Vérification de la section Trail du Souffleur et de son fonctionnement', async () => {
    //scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll

    //section "Trail du Souffleur
    await expect(page.getByText('Trail du Souffleur')).toBeVisible();
    const trail = page.locator('//*[@id="__next"]/div/main/div[2]/section/div/div/div/div[2]/p');  
    // Vérifier la police utilisée
    await expect(trail).toHaveCSS('font-family', /Montserrat/);
    // Vérifier la taille du texte
    await expect(trail).toHaveCSS('font-size', '20px');
    // Vérifier la graisse (bold, normal, etc.)
    await expect(trail).toHaveCSS('font-weight', '400');
    // Vérifier la couleur du texte
    await expect(trail).toHaveCSS('color', 'rgb(51, 51, 51)'); 
    
    //cliquer sur discover
    await expect(page.locator('//*[@id="__next"]/div/main/div[2]/section/div/div/div/div[2]/div[2]/button')).toBeVisible();
    await page.locator('//*[@id="__next"]/div/main/div[2]/section/div/div/div/div[2]/div[2]/button').click();
    await expect(page).toHaveURL('https://www.beachcomber-hotels.com/en/hotel/shandrani-beachcomber');
});
    //retour
    await page.goBack();
    await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races');

    await test.step('logo sponsoring', async () => {
    //section sponsors
    await expect(page.getByText('sponsors')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[1]/a/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[2]/a/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[3]/a/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[4]/a/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[5]/a/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[6]/a/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[2]/div/div/span[1]/a/img')).toBeVisible();
   


    //*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[2]/div/div/span[1]/a/img
    

    //verfier hover de logo en couleur
    const logo = page.locator('//*[@id="__next"]/div/main/div[4]/section/div/div/div[2]/div[1]/div/div/span[1]/a/img');
    await logo.hover();
    //ajouter une attente pour observer l'effet de survol
    await page.waitForTimeout(1000); // 1 seconde
    });

    await test.step('Vérification de la section vidéo et de son fonctionnement', async () => {
    //section video, lancer la video youtube
    await expect(page.locator('//*[@id="__next"]/div/main/div[5]/section/div/div[2]/div/div/div/div/img')).toBeVisible();
    await page.locator('//*[@id="__next"]/div/main/div[5]/section/div/div[2]/div/div/div/div/img').click();
    //attendre que la video soit visible
    await expect(page.locator('//*[@id="__next"]/div/main/div[5]/section/div/div[2]/div/video')).toBeVisible();
    });

    await test.step('Vérification de la section Races in km et de son fonctionnement', async () => {
    //section Races in km
    await expect(page.getByText('Races in km')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/div[6]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[1]')).toBeVisible();

    
    //scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll  
    await expect(page.locator('//*[@id="__next"]/div/main/div[6]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/button')).toBeVisible({ timeout: 150000 });
  

    //ouvrir le lien dans nouvelle fenetre
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('//*[@id="__next"]/div/main/div[6]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/button').click(), // Le clic qui ouvre une nouvelle page
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://roag.org/');
    await newPage.close();

    //cliquer sur more info et verifier la redirection
await expect(page.locator('//*[@id="__next"]/div/main/div[6]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/a')).toBeVisible();
await page.locator('//*[@id="__next"]/div/main/div[6]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/a').click();
await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races/beachcomber-trail-5-star-challenge');
goback:
await page.goBack();
await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races');

//scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    });

    await test.step('Vérification de la section Testimonials et des éléments du footer', async () => {
//section Testimonials
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[1]/div/p')).toHaveText('Testimonials');
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[1]/div/h2')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[2]/div[2]')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[2]/div[1]/div/div/div/div[3]/div/div/div/div[1]/p')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[2]/div[1]/div/div/div/div[3]/div/div/div/div[2]/div[1]')).toBeVisible({timeout: 150000});  
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[2]/div[1]/div/div/div/div[3]/div/div/div/div[2]/div[2]')).toBeVisible();
await expect(page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[2]/div[2]/button[2]')).toBeVisible();
await page.locator('//*[@id="__next"]/div/main/div[7]/section/div/div/div[2]/div[2]/button[2]').click();
await page.waitForTimeout(1000);
    });

    await test.step('Vérification des éléments du footer et de son fonctionnement', async () => {
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
//refermer le modal
await page.locator('//*[@id="__next"]/div/footer/div[2]/div/button').click();
    });

    await test.step('Navigation vers la page Sous fleur via le menu ', async() => {
//voir sous menu races
await page.locator('div.menu-item.active').hover();
await expect(page.locator('//*[@id="__next"]/div/header/div/div/nav/div[1]/div/span/span')).toBeVisible();
await page.locator('//*[@id="__next"]/div/header/div/div/nav/div[1]/div/span/span').click();
await expect(page.locator('//*[@id="__next"]/div/header/div/div/nav/div[1]/div/div/div/div[1]/div/div[1]')).toBeVisible();

//cliquer ce sous menu pour aller sur la page Sous fleur
await page.locator('//*[@id="__next"]/div/header/div/div/nav/div[1]/div/div/div/div[2]/div/div[3]/button').click();
await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races/trails-du-souffleur');
await expect(page).toHaveTitle(/Trails du souffleur | Beachcomber/);

//menu active
    const activeMenuraces = page.locator('div.menu-item.active');
await expect(activeMenuraces).toHaveClass(/active/);
await expect(activeMenuraces).toHaveText('Races');
    });

    await test.step('Vérification des éléments du slider sous fleur et de la section fixe au scroll', async () => {
//verifier les elements de slider
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/picture/img')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/h1')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/div/div[3]/div/p[1]')).toBeVisible();
    await expect(page.locator('//*[@id="__next"]/div/main/section/ul')).toBeVisible();

    // clique breadcrumb
    await page.locator('//*[@id="__next"]/div/main/section/ul/li[2]/a').click();
    await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races');
    goback2:
    await page.goBack();
    await expect(page).toHaveURL('https://staging-events.beachcomber-hotels.com/en/races/trails-du-souffleur');
    });

    await test.step('Vérification de la section Overview et de son fonctionnement', async () => {
    //bloc figé au scroll
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[2]/div')).toBeVisible();
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[2]/div')).toBeVisible();
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000);
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[2]/div')).toBeVisible();
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[2]/div')).toBeVisible();
    await page.locator('body').press('PageUp');
    await page.waitForTimeout(1000);
    });

    await test.step('Vérification de la section Overview et de la typographie du paragraphe', async () => {
    //verification typographie paragraphe
    const para = page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[1]/div[1]/section/div/div/div[1]/p');
    // Vérifier la police utilisée
    await expect(para).toHaveCSS('font-family', /Montserrat/);
    // Vérifier la taille du texte
    await expect(para).toHaveCSS('font-size', '16px');
    // Vérifier la graisse (bold, normal, etc.)
    await expect(para).toHaveCSS('font-weight', '400');
    // Vérifier la couleur du texte
    await expect(para).toHaveCSS('color', 'rgb(51, 51, 51)'); 

    //scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    });

    //bloc map
    await test.step('Vérification de la section map et ouverture du pdf map', async () => {         
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[1]/section/div/div[1]/div[2]')).toBeVisible();
    //cliquer sur view larger map
    await expect(page.locator('//*[@id="__next"]/div/main/div[1]/section/div/div/div[1]/section/div/div[2]/a/button')).toBeVisible();

    // Ouvrir le lien dans une nouvelle page
  const [newPagemap] = await Promise.all([
    page.context().waitForEvent('page'), // attendre la nouvelle page
    page.locator('xpath=//*[@id="__next"]/div/main/div[1]/section/div/div/div[1]/section/div/div[2]/a/button').click(), // clic
  ]);

    //await newPagemap.waitForLoadState(); // attend que la page soit prête
    await newPagemap.close();

});
    await test.step('scroll vers le bas', async () => {
      //scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    });

    //races gallery
    await test.step('Vérification de la section gallery et ouverture d\'une image', async () => {   
    const gallery = page.locator('//*[@id="__next"]/div/main/div[2]/section/div/div[1]/p');        
    await expect(page.locator('//*[@id="__next"]/div/main/div[2]/section/div/div[1]/p')).toBeVisible();
    
    // Vérifier la police utilisée
    await expect(gallery).toHaveCSS('font-family', /Montserrat-Regular/);
    // Vérifier la taille du texte
    await expect(gallery).toHaveCSS('font-size', '20px');
    // Vérifier la graisse (bold, normal, etc.)
    await expect(gallery).toHaveCSS('font-weight', '400');
    // Vérifier la couleur du texte
    await expect(gallery).toHaveCSS('color', 'rgb(51, 51, 51)');

    });

    await test.step('Vérification de la typographie sous le titre en gras', async () => {

    //typographie sous le titre en gras
    const gallerybold = page.locator('//*[@id="__next"]/div/main/div[2]/section/div/div[1]/h2');

    await expect(gallerybold).toBeVisible();
    // Vérifier la police utilisée
    await expect(gallerybold).toHaveCSS('font-family', /Montserrat-Bold/);
    // Récupérer la couleur calculée (getComputedStyle)
const color = await gallerybold.evaluate(el => getComputedStyle(el).color);

// Vérifier la valeur
    expect(color).toBe('rgb(51, 51, 51)');

// Vérifier aussi la taille de police si besoin
    const fontSize = await gallerybold.evaluate(el => getComputedStyle(el).fontSize);
    expect(fontSize).toBe('40px');
    });

    //scroll un peu vers le bas
    await page.locator('body').press('PageDown');
    await page.waitForTimeout(1000); // attendre 1 seconde pour voir l'effet de scroll
    //cliquer sur une image pour l'ouvrir
    await test.step(' Ouvertured\'une image de la galerie', async () => {
    await expect(page.locator('//*[@id="3182-wl-4ee3100c-fbf8-4d9f-850d-d8f2ecf3dba6"]')).toBeVisible({ timeout: 150000 });
    await page.locator('//*[@id="3182-wl-4ee3100c-fbf8-4d9f-850d-d8f2ecf3dba6"]').click();
    //attendre que le modal soit visible
    await expect(page.locator('//*[@id="cr__fs-wrap"]/div/div/div/div[1]/div[1]/img[1]')).toBeVisible();

    //cliquer en dehor de la photo pour fermer
    await page.locator('//*[@id="cr__fs-wrap"]/div/div/button[4]').click();
    await expect(page.locator('//*[@id="cr__fs-wrap"]/div/div/div/div[1]/div[1]/img[1]')).toBeHidden();

});
});