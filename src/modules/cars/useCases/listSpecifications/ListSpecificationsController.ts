import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpesficationsUseCase } from "./ListSpecificationsUseCase";

class ListSpesficationsController {
  async handdle(request: Request, response: Response): Promise<Response> {
    const listSpesficationsUseCase = container.resolve(
      ListSpesficationsUseCase
    );
    const specifications = await listSpesficationsUseCase.execute();

    return response.json(specifications);
  }
}

export { ListSpesficationsController };
