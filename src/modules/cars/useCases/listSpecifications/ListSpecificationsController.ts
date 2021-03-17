import { Request, Response } from "express";

import { ListSpesficationsUseCase } from "./ListSpecificationsUseCase";

class ListSpesficationsController {
  constructor(private listSpecificationsUseCase: ListSpesficationsUseCase) {}

  handdle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}

export { ListSpesficationsController };
