const puppeteer = require("puppeteer");

async function go() {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 750 });

    // site to be tested

    await page.goto("http://127.0.0.1:5500/html_css/CSS/index.html");

    // user is gonna click sign up

    // click submit button

    // await page.click("#sum_submit");

    await page.click("#signinbtn");

    await page.type("#sign-in-email","jeremy@gmail.com");

    await page.type("#sign-in-password","jeremy");

    await page.click("#sign-in-submit");

    // test search functionality
    await new Promise((r) => setTimeout(r, 2000));

    await page.click("#switch-to-admin-view")

    await page.click("#edit-meetings-click");

    await page.type("#location","Gamma Phi Beta");

    await page.type("#date","05092023");

    await page.type("#Comments","Last Chapter of the Year");

    await page.click("#submit-meeting-btn")

    await new Promise((r) => setTimeout(r, 2000));

    await page.click("#switch-to-user-view")

    await page.click("#network-btn")

    await page.type("#filterName","Anna Geweke");

    await page.click("#filter-button")

    await page.click("#attendance-btn")

    await page.click("#where-am-i-btn")

    await page.click("#profile-btn")

    await page.click("#signupbtn")

    await page.type("#sign-up-name", "New Member")

    await page.type("#sign-up-email", "newmember1@gmail.com")

    await page.type("#sign-up-password", "newmember1")

    await page.click("#sign-up-button")

    await new Promise((r) => setTimeout(r, 2000));

    await page.type("#edit-hometown","Town")

    await page.type("#edit-major","IS")

    await page.type("#edit-grad","2023")

    await page.type("#edit-bio","Hello World")

    await page.click("#submit-edit-profile-btn")

    await page.click("#graduate-profile-btn")

    await new Promise((r) => setTimeout(r, 2000));

    await page.type("#gradYear","2023")

    await page.type("#major","IS")

    await page.type("#company","Prudential")

    await page.type("#position","Financial Analyst")

    await page.type("#linkedIn","@newmember")

    await page.click("#submit-grad-btn")
};

go();