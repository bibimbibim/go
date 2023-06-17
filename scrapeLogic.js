const puppeteer = require("puppeteer");
require("dotenv").config()

const scrapeLogic = async (res) => {
    const browser = await puppeteer.launch({
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
        ],
        executablePath: process.env.NODE_ENV === "production" ?
            process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
        headless: "new"
    });
    try {
        console.log("================1")
        const page = await browser.newPage();
        console.log("a================1")
        await page.goto("https://weverse.io", { waitUntil: "networkidle2" });
        console.log("b================1")
        const id = "letsgo2310@protonmail.com";
        const pw = "gogo2020!";
        console.log("c================1")
        // 로그인
        await page.click(
            "#root > div.App > div > div.GlobalLayoutView_header__1UkFL > header > div > a"
        );
        console.log("================2")
        // setTimeout(async ()=>{}, 1000)
        await page.waitForSelector(
            "#__next > div > div.sc-fdeced8b-3.fuepEy > form > div > div.sc-ed52fcbe-8.bhRZmA > input"
        );
        await page.type(
            "#__next > div > div.sc-fdeced8b-3.fuepEy > form > div > div.sc-ed52fcbe-8.bhRZmA > input",
            id
        );
        console.log("================3")
        await page.keyboard.down("Enter");
        console.log("================4")
        await page.waitForSelector(
            "#__next > div > div.sc-fdeced8b-3.fuepEy > div > form > div.sc-d0f94a43-0.bCrkf > div > div.sc-ed52fcbe-8.eoxMAH > input"
        );
        await page.type(
            "#__next > div > div.sc-fdeced8b-3.fuepEy > div > form > div.sc-d0f94a43-0.bCrkf > div > div.sc-ed52fcbe-8.eoxMAH > input",
            pw
        );
        await page.keyboard.down("Enter");
        console.log("================5")

        const num = "2-119928500"
        setTimeout(async ()=>{}, 1000)
        await page.goto(`https://weverse.io/fromis9/live/${num}`);

        // ErrorPageView_title__9kyB8
        console.log("================6")
        page.on("response", async (res) => {
            const url = res.url();
            if (url.includes("https://global.apis.naver.com/rmcnmv/rmcnmv/")) {
                console.log(url);
                go(url)
            }
        });

        function go(url) {
            console.log(url);
            res.send(url);   
        }
    } catch (e) {
        console.error(e);
        res.send(`Something went wrong: ${e}`)
    } finally {
        // await browser.close();
    }
};

module.exports = { scrapeLogic };
