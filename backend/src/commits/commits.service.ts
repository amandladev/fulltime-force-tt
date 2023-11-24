import {
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common'
import { Octokit } from 'octokit'
import { IParamsFindAll } from './interfaces/param.interface'
@Injectable()
export class CommitsService {
  constructor() {}
  async findAll(params: IParamsFindAll) {
    const { status, data } = await this.octokitRequestCommits(params)

    if (status === 200) {
      if (data.length > 0) {
        data.forEach((item) => {
          item.sha = item.sha.substring(0, 8)
          const date = new Date(item.commit.author.date)
          const formattedDate = this.formatDate(date)
          item.commit.author.date = formattedDate
        })
      }
      return data
    } else if (status === 404) {
      throw new NotFoundException('Repository or user not found')
    } else {
      throw new InternalServerErrorException(
        `Unexpected status code: ${status}`
      )
    }
  }

  async octokitRequestCommits(IParamsFindAll: IParamsFindAll) {
    const { username, repository } = IParamsFindAll
    const octokit = new Octokit({
      auth: process.env.GITHUB_KEY
    })

    try {
      const { status, data } = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: username,
          repo: repository
        }
      )
      return { status, data }
    } catch (err) {
      console.error({ GITHUB_ERROR: err.message || err.stack || err })
      throw new InternalServerErrorException('Github API Error')
    }
  }

  formatDate(date: Date) {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
      .getDate()
      .toString()
      .padStart(2, '0')}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
      .getSeconds()
      .toString()
      .padStart(2, '0')}`
  }
}
