import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/order/repositories/order.repository';
import { Order } from '../../domain/order/entities/order.entity';

@Injectable()
export default class CreateOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(customerName: string, total: number): Promise<void> {
    const order = new Order(undefined, customerName, total); // id como undefined ou omitido
    await this.orderRepository.save(order);
  }
}
