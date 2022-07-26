import { prisma } from "../../prisma";
import { OrderManagementCreateData, OrderManagementRepository } from "../orderManagement-repository";

export class PrismaOrderManagementRepository implements OrderManagementRepository {
    async create({ num_order, name_client, num_table, order, type }: OrderManagementCreateData) {
        await prisma.orderManagement.create({
            data: {
                num_order,
                name_client,
                num_table,
                order,
                type
            }
        })
    }
}