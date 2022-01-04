import {Body, Controller, Get, Post} from "@nestjs/common";
import { EmpireService } from "./empire.service";
import { CreateEmpireDto } from "./dto/create-empire-dto.dto";
import {Empire} from "../types/empire.type";

@Controller("empire")
export class EmpireController {

    constructor(private readonly empireService: EmpireService) {}

    //@Post()
    //async create(@Body() createEmpireDto: CreateEmpireDto)

    @Get()
    getEmpire(): Empire {
        return this.getEmpire();
    }
}