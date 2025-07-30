import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CitiesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send("Olá, DEV!");
});

//Cidades
router.get(
  "/cidades",
  CitiesController.getAllValidation,
  CitiesController.getAll
);

router.get(
  "/cidades/:id",
  CitiesController.getByIdValidation,
  CitiesController.getById
);

router.post(
  "/cidades",
  CitiesController.createValidation,
  CitiesController.create
);

router.put(
  "/cidades/:id",
  CitiesController.updateByIdValidation,
  CitiesController.updateById
);

router.delete(
  "/cidades/:id",
  CitiesController.deleteByIdValidation,
  CitiesController.deleteById
);

export { router };
