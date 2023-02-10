import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll(): Promise<import(".prisma/client").Product[]>;
    getById(id: string): Promise<import(".prisma/client").Product>;
}
