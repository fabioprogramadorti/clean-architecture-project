import { OrderRepository } from 'src/domain/order/repositories/order.repository';
import { Order } from 'src/domain/order/entities/order.entity';

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.find(order => order.id === id) || null;
  }

  async update(order: Order): Promise<void> {
    const index = this.orders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.orders[index] = order;
    }
  }

  async delete(id: string): Promise<void> {
    this.orders = this.orders.filter(order => order.id !== id);
  }

  async findAll(): Promise<Order[]> {
    return this.orders;
  }
}