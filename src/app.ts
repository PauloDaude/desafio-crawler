import express from "express";
import { fetchAllLaptops } from "./scraper.js";

const app = express();
const port = 3000;

app.get("/laptops", async (_, res) => {
  const data = await fetchAllLaptops()
    .then((data) => {
      console.log(`Dados carregados: ${data.length} laptops`);
      return data;
    })
    .catch((error) => console.error(error));

  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Laptops endpoint: http://localhost:${port}/laptops`);
});
