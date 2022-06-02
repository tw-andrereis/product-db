import pupeeteer from 'puppeteer';

export const loadProducts = async (url: string) => {
    const browser = await pupeeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('body');

    const selector = '#tabResult > tbody > tr';
    let elements = await page.$$eval(selector, data => {
        return data.map(el => ({
            name: el.querySelector('.txtTit')?.innerHTML,
            code: el.querySelector('.RCod')?.innerHTML.split(' ')[1].split(')')[0],
            quantity: parseInt(el.querySelector('.Rqtd')?.innerHTML.split('>')[2]!),
            value: el.querySelector('.RvlUnit')?.innerHTML.split('>')[2],
            total: el.querySelector('.valor')?.innerHTML
        }));
    });

    // save elements on database
    await browser.close();

    return elements;
};