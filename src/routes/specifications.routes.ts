import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpesficationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpesficationsController = new ListSpesficationsController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationController.handlle);

specificationsRoutes.get("/", listSpesficationsController.handdle);

export { specificationsRoutes };
