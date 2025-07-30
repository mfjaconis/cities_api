import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface ICidade {
  name: string;
}

type TypedRequestBody<T> = Request<{}, {}, T>;

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: TypedRequestBody<ICidade>, res: Response) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};
