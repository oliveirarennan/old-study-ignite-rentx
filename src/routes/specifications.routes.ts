import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpesficationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handlle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  listSpesficationsController.handdle(request, response);
});

export { specificationsRoutes };
