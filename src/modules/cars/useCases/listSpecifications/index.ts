import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpesficationsController } from "./ListSpecificationsController";
import { ListSpesficationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsUseCase = new ListSpesficationsUseCase(
  specificationsRepository
);

const listSpesficationsController = new ListSpesficationsController(
  listSpecificationsUseCase
);

export { listSpesficationsController };
