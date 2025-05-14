import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './domain/order/order.module';

@Module({
  imports: [OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
