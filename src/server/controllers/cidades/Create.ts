import { Request, Response } from "express";

interface ICidade {
  name: string;
}

type TypedRequestBody<T> = Request<{}, {}, T>;

export const create = (req: TypedRequestBody<ICidade>, res: Response) => {
  console.log(req.body);

  return res.send("Create!");
};
