import { Controller, Get, Post } from "@nestjs/common";
@Controller('heros')
export class HeroController{
    @Get('/findAll')
    findAllHero():string{
        return 'this is find all heros';
    }

    @Post('/add')
    createHero():string{
        return 'this is creating hero';
    }
}