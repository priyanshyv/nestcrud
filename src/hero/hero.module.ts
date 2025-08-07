import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroMiddleware } from './hero.middleware';

@Module({
    imports: [],
  controllers: [HeroController],
  providers: [],
  exports: []
})
export class HeroModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(HeroMiddleware).forRoutes('heros');
    }
}
