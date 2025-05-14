import { Module } from '@nestjs/common';
import  CreateOrderUseCase  from 'src/application/use-cases/create-order.usecase';
import { OrderRepository } from 'src/domain/order/repositories/order.repository';
import { OrderController } from 'src/interfaces/controllers/order.controller';
import { InMemoryOrderRepository } from './repositories/in-memory-order.repository';

@Module({
  controllers: [OrderController],
  providers: [
    CreateOrderUseCase,
    { provide: OrderRepository, useClass: InMemoryOrderRepository },
  ],
})
export class OrderModule {}