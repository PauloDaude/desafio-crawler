export interface LaptopDataI {
  title?: string;
  price?: string;
  description?: string;
  imgUrl?: string | null;
  rating?: string | null;
}

export function extractLaptopData(item: Element): LaptopDataI {
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

export function orderByPrice(laptops: LaptopDataI[]) {
  return laptops.sort((a, b) => {
    const priceA = parseFloat(a.price!.replace(/[^0-9.-]+/g, ""));
    const priceB = parseFloat(b.price!.replace(/[^0-9.-]+/g, ""));
    return priceA - priceB;
  });
}
