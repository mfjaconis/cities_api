import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface IParamsProps {
  id?: number;
}

interface IBodyProps {
  name: string;
}

type TypedRequest<T> = Request<T, {}, T, {}>;

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
}));

export const updateById = async (
  req: TypedRequest<IParamsProps>,
  res: Response
) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};
