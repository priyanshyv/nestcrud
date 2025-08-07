import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  //yei jo nestFeactory hai isney saari abstraction hide kardi hai
  const app = await NestFactory.create(RootModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
