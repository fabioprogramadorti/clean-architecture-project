import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderRepository } from '../../domain/order/repositories/order.repository';
import CreateOrderUseCase from 'src/application/use-cases/create-order.usecase';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly orderRepository: OrderRepository,
  ) {}

  @Post()
  async create(@Body() body: { customerName: string; total: number }) {
    const { customerName, total } = body;
    await this.createOrderUseCase.execute(customerName, total);
    return { message: 'Order created successfully' };
  }

  @Get()
  async findAll() {
    return this.orderRepository.findAll();
  }
}
