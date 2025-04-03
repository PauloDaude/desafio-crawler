export interface LaptopData {
  title: string;
  price: string;
  description: string;
  imgUrl: string | null;
  rating: string | null;
}

export function extractLaptopData(item: Element): LaptopData {
  const getSafeText = (selector: string) => {
    const element = item.querySelector(selector);
    return element?.textContent?.trim() || undefined;
  };

  const img = item.querySelector(".image")?.getAttribute("src");

  return {
    title: getSafeText(".title"),
    price: getSafeText(".price"),
    description: getSafeText(".description"),
    imgUrl: img ? `https://webscraper.io${img}` : null,
    rating: getSafeText(".ratings"),
  };
}
