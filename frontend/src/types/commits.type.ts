export interface APIGitHub {
    sha: string
    node_id: string
    commit: Commit
    url: string
    html_url: string
    comments_url: string
    author: APIGitHubAuthor
    committer: APIGitHubAuthor
    parents: Parent[]
  }
  
  export interface APIGitHubAuthor {
    login: any
    id: number
    node_id: any
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: any
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: any
    received_events_url: string
    type: any
    site_admin: boolean
  }
  
  export interface Commit {
    author: CommitAuthor
    committer: CommitAuthor
    message: string
    tree: Tree
    url: string
    comment_count: number
    verification: Verification
  }
  
  export interface CommitAuthor {
    name: any
    email: any
    date: Date
  }
  
  export interface Tree {
    sha: string
    url: string
  }
  
  export interface Verification {
    verified: boolean
    reason: string
    signature: string
    payload: string
  }
  
  export interface Parent {
    sha: string
    url: string
    html_url: string
  }
  