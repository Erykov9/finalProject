"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
const common_2 = require("@nestjs/common");
let OrderService = class OrderService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.order.findMany({});
    }
    getById(orderId) {
        return this.prismaService.order.findUnique({
            where: {
                orderId
            },
        });
    }
    ;
    async create(orderData) {
        try {
            return await this.prismaService.order.create({
                data: orderData
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_2.ConflictException('Order already exist');
            }
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map