import { Order } from "../entities/order.entity";

export abstract class OrderRepository {
  abstract save(order: Order): Promise<void>;
  abstract findById(id: string): Promise<Order | null>;
  abstract update(order: Order): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Order[]>;
}