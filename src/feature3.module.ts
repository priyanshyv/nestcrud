import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class Feature3 {
  constructor(){
    console.log('Feature3 module');
  }
}