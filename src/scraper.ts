import { JSDOM } from "jsdom";
import axios from "axios";
import {
  extractLaptopData,
  LaptopDataI,
  orderByPrice,
} from "./scraper-utils.js";

const BASE_URL =
  "https://webscraper.io/test-sites/e-commerce/static/computers/laptops";

export async function getLenovoLaptops() {
  const allLaptops = await fetchAllLaptops();
  const lenovoLaptops = allLaptops.filter((laptop) =>
    laptop.title!.toLowerCase().includes("lenovo"),
  );

  return orderByPrice(lenovoLaptops);
}

async function fetchAllLaptops(page = 1, allLaptops: LaptopDataI[] = []) {
  try {
    const url = `${BASE_URL}?page=${page}`;

    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const items = document.querySelectorAll(".card.thumbnail");

    items.forEach((item) => allLaptops.push(extractLaptopData(item)));

    if (items.length > 0) {
      console.log("Carregando página:", page);
      const nextPage = page + 1;
      return await fetchAllLaptops(nextPage, allLaptops);
    }

    return allLaptops;
  } catch (error) {
    console.error("Um erro ocorreu enquanto buscava os dados:", error);
    return allLaptops;
  }
}
