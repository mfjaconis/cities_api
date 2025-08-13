import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe("Cities - Create", () => {
  it("Criar registro", async () => {
    const res1 = await testeServer.post("/cidades").send({
      name: "Caxias do Sul",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED)
    expect(typeof res1.body).toEqual('number')
  });

  it("Tenta criar um registro com um nome muito curto", async () => {
    const res1 = await testeServer.post("/cidades").send({
      name: "Ca",
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    expect(res1.body).toHaveProperty('errors.body.name')
  });
});
