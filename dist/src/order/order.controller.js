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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const create_order_dto_1 = require("./dtos/create-order.dto");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common/");
const order_service_1 = require("./order.service");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getAll() {
        return await this.orderService.getAll();
    }
    async getById(id) {
        const order = await this.orderService.getById(id);
        if (!order)
            throw new common_4.NotFoundException('Order not found');
        return order;
    }
    create(orderData) {
        return this.orderService.create(orderData);
    }
};
__decorate([
    (0, common_2.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAll", null);
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_3.Param)('id', new common_3.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getById", null);
__decorate([
    (0, common_2.Post)('/'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.OrderDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map