import { response, Router } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepositories";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoryRepository.list();

  return response.json(all);
});

export { categoriesRoutes };