import express from "express";
import { PrismaOrderManagementRepository } from "./repositories/prisma/prisma-orderManagement-repository";
import { SubmitOrderManagementService } from "./services/submit-orderManagement-service";

export const routes = express.Router()

routes.post('/orderManagement', async (req, res) => {
    const { num_order, name_client, num_table, order, type } = req.body;//retornado valores da tabela do bd

    const prismaOrderManagementRepository = new PrismaOrderManagementRepository()
    const submitOrderManagementService = new SubmitOrderManagementService(
        prismaOrderManagementRepository
    )

    await submitOrderManagementService.execute({
        num_order,
        name_client,
        num_table,
        order,
        type
    })

    return res.status(201).send();//retornando estatus 201 quando algo foi criado 
})