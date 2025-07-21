import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  name: string;
  state: string;
}

type TypedRequestBody<T> = Request<{}, {}, T>;

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required(),
});

export const create = async (req: TypedRequestBody<ICidade>, res: Response) => {
  let validateData: ICidade | undefined;

  try {
    validateData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }

  console.log(validateData);

  return res.send("Create!");
};
