import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface ICidade {
  name: string;
  state: string;
}

interface IFilter {
  filter?: string;
  limit?: number;
}

type TypedRequestBody<T> = Request<{}, {}, T>;

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      name: yup.string().required().min(3),
      state: yup.string().required().min(3),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().optional().min(3),
      limit: yup.number(),
    })
  ),
}));

export const create = async (req: TypedRequestBody<ICidade>, res: Response) => {
  return res.send("Create!");
};
