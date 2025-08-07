import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [Feature3, HeroModule],
  controllers: [],
  providers: [],
})
export class ChatModule {
  constructor(){
    console.log('Chat module');
  }
}