import { OrderDTO } from './dtos/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getAll(): Promise<import(".prisma/client").Order[]>;
    getById(id: string): Promise<import(".prisma/client").Order>;
    create(orderData: OrderDTO): Promise<import(".prisma/client").Order>;
}
