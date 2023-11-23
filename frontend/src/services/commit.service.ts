import type { APIGitHub } from '../types/commits.type'
import type { ParamsFindAll } from '../types/params.type'

export class CommitService {
  async findAll(params: ParamsFindAll) {
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
