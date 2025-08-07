import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class Feature2 {
  constructor(){
    console.log('Feature2 module');
  }
}