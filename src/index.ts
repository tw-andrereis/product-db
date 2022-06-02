import axios from 'axios';
import cheerio from 'cheerio';

const main = async (url: string) => {
    console.log('main');
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const element = $('#article-show-primary-sticky-nav > div.crayons-card.crayons-card--secondary.branded-7.p-4.pt-0.gap-4.grid > div.-mt-4 > a > span.crayons-link.crayons-subtitle-2.mt-5');
    console.log(element.text());
}

const url = 'https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn';
main(url);