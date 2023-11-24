import type { APIGitHub } from '../interfaces/commits.interface'
import { IParamsFindAll } from '../interfaces/params.interface'
export class CommitService {
  async findAll(params: IParamsFindAll) {
    const { username, repository } = params
    try {
      const response = await fetch(
        `http://localhost:3000/commits?username=${username}&repository=${repository}`
      )
      const data = (await response.json()) as APIGitHub[]
      return {
        data,
        status: true,
      }
    } catch (err) {
      console.error('Commit Service ERROR',err)
      return {
        data: [],
        status: false
      }
    }
  }
}
