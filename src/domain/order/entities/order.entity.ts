// src/domain/order/entities/order.entity.ts
import { v4 as uuidv4 } from 'uuid';

export class Order {
  constructor(
    public id: string = uuidv4(), // ID gerado internamente, se não informado
    public customerName: string,
    public total: number,
  ) {}
}
