import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface IParamsProps {
  id?: number;
}

type TypedRequest<T> = Request<T, {}, {}, {}>;

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const getById = async (
  req: TypedRequest<IParamsProps>,
  res: Response
) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};
