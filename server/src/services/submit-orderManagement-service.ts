import { OrderManagementRepository } from "../repositories/orderManagement-repository";

interface SubmitOrderManagementServiceRequest {
    num_order: number;
    name_client: string;
    num_table: number;
    order: string;
    type: boolean;
}
export class SubmitOrderManagementService {
    constructor(
        private orderManagementRepository: OrderManagementRepository,
    ) { }

    async execute(request: SubmitOrderManagementServiceRequest) {
        const { num_order, name_client, num_table, order, type } = request;//retornado valores da tabela do bd

        if (!num_order) {
            throw new Error('Type is requeire.')
        }
        if (!name_client) {
            throw new Error('Type is requeire.')
        }
        if (!num_table) {
            throw new Error('Type is requeire.')
        }
        if (!order) {
            throw new Error('Type is requeire.')
        }

        await this.orderManagementRepository.create({
            num_order,
            name_client,
            num_table,
            order,
            type
        })
    }
}