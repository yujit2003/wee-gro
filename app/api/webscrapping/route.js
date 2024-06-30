// Import necessary modules
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

// Define the GET handler
export async function GET(request) {
  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true, // Change to false if you need to see the browser
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ]
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto("https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html", {
      waitUntil: "domcontentloaded",
    });

    // Scrape the data
    const result = await page.$$eval(
      'body > div.market-research.onload > div:nth-child(2) > div > div > div > div > div > div > div > div > table > tbody > tr', 
      rows => {
        return Array.from(rows, row => {
          const columns = row.querySelectorAll('td');
          return Array.from(columns, column => column.innerText);
        });
      }
    );

    // Close the browser
    await browser.close();

    // Return the data as a JSON response
    return NextResponse.json({
      policy: result
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
