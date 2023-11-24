import { Controller, Get, Query } from '@nestjs/common'
import { CommitsService } from './commits.service'
import { IParamsFindAll } from './interfaces/param.interface'

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll(
    @Query('username') username: string,
    @Query('repository') repository: string
  ) {
    const paramFindAll: IParamsFindAll = {
      username,
      repository
    }
    return this.commitsService.findAll(paramFindAll)
  }
}
