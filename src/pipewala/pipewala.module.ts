import { Module } from "@nestjs/common";
import { PipeWalaController } from "./pipewala.controller";

@Module({
    imports: [],
    controllers: [PipeWalaController],
    providers: [],
  })
export class PipeModule {
    constructor(){
        console.log('PipeModule');
      }
}