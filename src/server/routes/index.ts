import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send("Olá, DEV!");
});

//Cidades
router.post("/cidades", CidadesController.create);

export { router };
