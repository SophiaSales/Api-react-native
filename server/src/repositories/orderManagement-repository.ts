export interface OrderManagementCreateData {
    num_order: number;
    name_client: string;
    num_table: number;
    order: string;
    type: boolean;
}

export interface OrderManagementRepository {
    create: (data: OrderManagementCreateData) => Promise<void>;
}