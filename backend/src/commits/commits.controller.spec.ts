import { Test, TestingModule } from '@nestjs/testing'
import { CommitsController } from './commits.controller'
import { CommitsService } from './commits.service'
import { NotFoundException } from '@nestjs/common'

describe('CommitsController', () => {
  let controller: CommitsController
  let service: CommitsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitsController],
      providers: [CommitsService]
    }).compile()

    controller = module.get<CommitsController>(CommitsController)
    service = module.get<CommitsService>(CommitsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('findAll', () => {
    it('should return commits data', async () => {
      const mockCommits = [
        {
          sha: '77150e9f5956ef026c1bde73cb9b6c72cd1f88bf',
          node_id:
            'C_kwDOIKEbg9oAKDc3MTUwZTlmNTk1NmVmMDI2YzFiZGU3M2NiOWI2YzcyY2QxZjg4YmY',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '05/13/2023 10:37:02'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2023-05-13T15:37:02Z'
            },
            message: 'Update README.md',
            tree: {
              sha: '34858f8e5cb37343d67dc37011fc44916dd7566b',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/34858f8e5cb37343d67dc37011fc44916dd7566b'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/77150e9f5956ef026c1bde73cb9b6c72cd1f88bf',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJkX66eCRBK7hj4Ov3rIwAA1LAIAGRBh3OGsLDZit1hW7ha6xR8\nC8Xm5XPGxMQhgLxM9x9xFJRtY8CtUki0WPUi6UoVHNdFaK4CuSumhGilxAdcULnu\naC15ssuCYpXL00XTHx2ffR7sp/pWrbOQ3seKzTSQ6JJ1dbi3ReWmrq8PopmVIYc4\ntL4G82AK8c0bbBTvT1Vc0GOeWOacLx2V3Ar8PirFKiS3t2iOMIKEYkFn5kA5H+4r\n2IAHQEqIbYZgWRg1FlObACWFsWsAhtC5+k2cjrqA41jP8jbHA0deTO9M9mkYKlZW\nC0cvatuQeBwnqPP/RMo/KIS7OcHZx5jd8fLALSyg6LWq25M+fIPBLuoZUFJJb2k=\n=SdDw\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 34858f8e5cb37343d67dc37011fc44916dd7566b\nparent 53a081df176a926952f27cf6b8667566bf7e26db\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1683992222 -0500\ncommitter GitHub <noreply@github.com> 1683992222 -0500\n\nUpdate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/77150e9f5956ef026c1bde73cb9b6c72cd1f88bf',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/77150e9f5956ef026c1bde73cb9b6c72cd1f88bf',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/77150e9f5956ef026c1bde73cb9b6c72cd1f88bf/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: [
            {
              sha: '53a081df176a926952f27cf6b8667566bf7e26db',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/53a081df176a926952f27cf6b8667566bf7e26db',
              html_url:
                'https://github.com/sreyescurotto/sreyescurotto/commit/53a081df176a926952f27cf6b8667566bf7e26db'
            }
          ]
        },
        {
          sha: '53a081df176a926952f27cf6b8667566bf7e26db',
          node_id:
            'C_kwDOIKEbg9oAKDUzYTA4MWRmMTc2YTkyNjk1MmYyN2NmNmI4NjY3NTY2YmY3ZTI2ZGI',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '04/09/2023 22:05:54'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2023-04-10T03:05:54Z'
            },
            message: 'Update README.md',
            tree: {
              sha: '37ab25dea0208c44389ee20087b917c92cad6f81',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/37ab25dea0208c44389ee20087b917c92cad6f81'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/53a081df176a926952f27cf6b8667566bf7e26db',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJkM30SCRBK7hj4Ov3rIwAAFEcIABQ8ab2FMP6j4PRWxobXjxKj\nkHkg0aVtno5+uJHltDBRP4TsWbflgfiO0qaC4Rk9//T8r24d5M06bk/8qutF6XEF\nFmaLZp3fP5wLxp8C23pao/0VXP/tPe8QdcVIigrT9FVwKnX5sUbwi/T8jTVB+edg\nZ62OsUtYlQrIZfRNIQ27/2mNYb80NCrtgdVxePtT6S113GBBYvs/RJkuazZtK5tb\naGrJVs2VE8PF+gHWozgrizu+uf+TKjAMaXRyfK1hDmfiTVA83lZOQgGCJw7hU0RH\nDlThZ4Diza0JnZFyUGyVDsRoLkYhN43XIPzyG0JDbJx0crd996IM8CFgWmXfzrY=\n=Btbt\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 37ab25dea0208c44389ee20087b917c92cad6f81\nparent 27bfad247a75b8ed2974b20b770620660d148c9b\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1681095954 -0500\ncommitter GitHub <noreply@github.com> 1681095954 -0500\n\nUpdate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/53a081df176a926952f27cf6b8667566bf7e26db',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/53a081df176a926952f27cf6b8667566bf7e26db',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/53a081df176a926952f27cf6b8667566bf7e26db/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: [
            {
              sha: '27bfad247a75b8ed2974b20b770620660d148c9b',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/27bfad247a75b8ed2974b20b770620660d148c9b',
              html_url:
                'https://github.com/sreyescurotto/sreyescurotto/commit/27bfad247a75b8ed2974b20b770620660d148c9b'
            }
          ]
        },
        {
          sha: '27bfad247a75b8ed2974b20b770620660d148c9b',
          node_id:
            'C_kwDOIKEbg9oAKDI3YmZhZDI0N2E3NWI4ZWQyOTc0YjIwYjc3MDYyMDY2MGQxNDhjOWI',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '10/07/2022 12:14:23'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2022-10-07T17:14:23Z'
            },
            message: 'Update README.md',
            tree: {
              sha: '1f2597e1e07aff60c0ce011cdebb2fe49e9fd7b5',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/1f2597e1e07aff60c0ce011cdebb2fe49e9fd7b5'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/27bfad247a75b8ed2974b20b770620660d148c9b',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJjQF5vCRBK7hj4Ov3rIwAAvhwIADdVGo4LO8JN5PB1fHKsBK3D\nQdTZjiI5MFb7B88FoPE7SL85eWs9zumiPtUbPqSFVPQ/1u46WVUxS8KhHBJrvYaP\nVdNkZL3kLEt2AsxpV57I/vW1Q5gr3B+ZMlnl96Ij2nWYQsGS9O42stQvZum8D+fQ\nQAtsvCmV42SybqGDFOeTXoy5W3h0Xw3RELl+o+fJ2xkykVkRLQvco6V8pwII1vYZ\nek8X9dpe5ZlenvBBBd/WjuagXv9d6i8S0PdnimCgYJmJWhoO5B2fuTm7TEBFsXNl\nDttFIqz8oio+c9Dje8/F3B8hyIiPu/bxWA/umF6ace33pis5zj1AYDcT7FT+Tis=\n=FKwW\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 1f2597e1e07aff60c0ce011cdebb2fe49e9fd7b5\nparent d66f0fd11983749e1df08a99a652cd4636639b6f\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1665162863 -0500\ncommitter GitHub <noreply@github.com> 1665162863 -0500\n\nUpdate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/27bfad247a75b8ed2974b20b770620660d148c9b',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/27bfad247a75b8ed2974b20b770620660d148c9b',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/27bfad247a75b8ed2974b20b770620660d148c9b/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: [
            {
              sha: 'd66f0fd11983749e1df08a99a652cd4636639b6f',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/d66f0fd11983749e1df08a99a652cd4636639b6f',
              html_url:
                'https://github.com/sreyescurotto/sreyescurotto/commit/d66f0fd11983749e1df08a99a652cd4636639b6f'
            }
          ]
        },
        {
          sha: 'd66f0fd11983749e1df08a99a652cd4636639b6f',
          node_id:
            'C_kwDOIKEbg9oAKGQ2NmYwZmQxMTk4Mzc0OWUxZGYwOGE5OWE2NTJjZDQ2MzY2MzliNmY',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '10/07/2022 12:13:57'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2022-10-07T17:13:57Z'
            },
            message: 'Update README.md',
            tree: {
              sha: '3cac6b2bf150829f1c5fa344299fd521087188d2',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/3cac6b2bf150829f1c5fa344299fd521087188d2'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/d66f0fd11983749e1df08a99a652cd4636639b6f',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJjQF5VCRBK7hj4Ov3rIwAAg60IAFKtZqPRBLvbcStFy9yx4bq7\nnzYARM60EJBrdRNTb3RukaOLcrCcvKtx2MThWPeuO+yqLVNvKmNuuunm0DfQcni5\nf90Jj15kna/98iIomoAw/l9R/zGzH875NlA2r/wn5yAZB8PZXiwNTeZJGZzzXrb+\nYjsIecs3weD2/lr9zzjlgxDbzSzlSlNBmIdFklLhxS2bkmp/4qumwhZgYe6sAPig\n4tmaKhBd2MTXs+SJa0r4070lGMduTpPHX2qucN/SyrSayMYofpCAW7fR79oli6ml\n3u4CRLevuiWp4cWLqSFiaKJX5fjG1iOBzCC+DYW8mQNVxaKDc/BjHUomgMzgfo8=\n=xHHa\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 3cac6b2bf150829f1c5fa344299fd521087188d2\nparent d87d985087a56acccbc62b28e6b0fc9c4667b65e\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1665162837 -0500\ncommitter GitHub <noreply@github.com> 1665162837 -0500\n\nUpdate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/d66f0fd11983749e1df08a99a652cd4636639b6f',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/d66f0fd11983749e1df08a99a652cd4636639b6f',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/d66f0fd11983749e1df08a99a652cd4636639b6f/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: [
            {
              sha: 'd87d985087a56acccbc62b28e6b0fc9c4667b65e',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/d87d985087a56acccbc62b28e6b0fc9c4667b65e',
              html_url:
                'https://github.com/sreyescurotto/sreyescurotto/commit/d87d985087a56acccbc62b28e6b0fc9c4667b65e'
            }
          ]
        },
        {
          sha: 'd87d985087a56acccbc62b28e6b0fc9c4667b65e',
          node_id:
            'C_kwDOIKEbg9oAKGQ4N2Q5ODUwODdhNTZhY2NjYmM2MmIyOGU2YjBmYzljNDY2N2I2NWU',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '10/07/2022 12:13:45'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2022-10-07T17:13:45Z'
            },
            message: 'Update README.md',
            tree: {
              sha: '3631d5b44456fd2ddbca45e8c4cfbda062c8f888',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/3631d5b44456fd2ddbca45e8c4cfbda062c8f888'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/d87d985087a56acccbc62b28e6b0fc9c4667b65e',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJjQF5JCRBK7hj4Ov3rIwAAG9EIAC5dCtz/Bv8G01C7Mbeo2Bpk\nnv1lSDfWf3UnY8I21bQ1J8GoG0fa7wydzWscCorUBZxgoiBPwThNb48ldnIOKT3f\nsWJPnZusiha7yzNIBFpFzVtcQM6UdWyE0QJIqatG7afyUKCrtb4aiAaTMwypDCcP\nrQoIiYkw0SFFld3VFEgDzyCiUsnBzbDEQGBXarsqplkKjcebR/rdZPJN5Dq0ntfd\nKMHu0xft+U6v0nqrJ78WqYQbp5w5QgLd+6A6AWAi1mYuneOGdmMTkkFWi238Jn8O\n/a+/FPJUH2SXSuqvWWzaWsf/FxG2lro8yL4tgDBCdrkdG+f8gIEx+RctmYZ6GYU=\n=V5tP\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 3631d5b44456fd2ddbca45e8c4cfbda062c8f888\nparent 95bcb30a3c2f879c1dcc24221e4610082410c8e1\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1665162825 -0500\ncommitter GitHub <noreply@github.com> 1665162825 -0500\n\nUpdate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/d87d985087a56acccbc62b28e6b0fc9c4667b65e',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/d87d985087a56acccbc62b28e6b0fc9c4667b65e',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/d87d985087a56acccbc62b28e6b0fc9c4667b65e/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: [
            {
              sha: '95bcb30a3c2f879c1dcc24221e4610082410c8e1',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/95bcb30a3c2f879c1dcc24221e4610082410c8e1',
              html_url:
                'https://github.com/sreyescurotto/sreyescurotto/commit/95bcb30a3c2f879c1dcc24221e4610082410c8e1'
            }
          ]
        },
        {
          sha: '95bcb30a3c2f879c1dcc24221e4610082410c8e1',
          node_id:
            'C_kwDOIKEbg9oAKDk1YmNiMzBhM2MyZjg3OWMxZGNjMjQyMjFlNDYxMDA4MjQxMGM4ZTE',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '10/07/2022 12:13:19'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2022-10-07T17:13:19Z'
            },
            message: 'Update README.md',
            tree: {
              sha: '127b3fe9b6f2fa525bf6ce754fcc7289e568d742',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/127b3fe9b6f2fa525bf6ce754fcc7289e568d742'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/95bcb30a3c2f879c1dcc24221e4610082410c8e1',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJjQF4vCRBK7hj4Ov3rIwAAi2UIAJKRqKqCVJzRTFVh+MZEZoYJ\nd+jtGeQZBvQ35FATlwK3L5JtGIZfUxCutjHE32BCnH5JjYAkP2XC13LbOsKjMPMl\nwPTJwVqo/xbOBEc5AhU31vBkp6l+ErCnmt8yk+2Ek/YS9SyS3pb9Luv4kCtBCqyu\n6Jaq3LS39ph6Yyzf77bnfMKaLc9tZ9x5PljH18WBI0yUGGMHztbo+hrqotRJdj+Z\n3yAQrBjzhNr86zTtdOoKVFa24XNDJ3KMo6VSxraWIgZJMflGC+NsFJSsYN2XgSdJ\ntNxHwJWAmaqPmIPKUdONpy4UjAT2O7ZiZbnjsH8zzxRXE2MOt1HqeSFkx5U84WA=\n=XrUI\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 127b3fe9b6f2fa525bf6ce754fcc7289e568d742\nparent c1bad1c0490fefc9cb927c93470a2929539aa7c4\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1665162799 -0500\ncommitter GitHub <noreply@github.com> 1665162799 -0500\n\nUpdate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/95bcb30a3c2f879c1dcc24221e4610082410c8e1',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/95bcb30a3c2f879c1dcc24221e4610082410c8e1',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/95bcb30a3c2f879c1dcc24221e4610082410c8e1/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: [
            {
              sha: 'c1bad1c0490fefc9cb927c93470a2929539aa7c4',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/c1bad1c0490fefc9cb927c93470a2929539aa7c4',
              html_url:
                'https://github.com/sreyescurotto/sreyescurotto/commit/c1bad1c0490fefc9cb927c93470a2929539aa7c4'
            }
          ]
        },
        {
          sha: 'c1bad1c0490fefc9cb927c93470a2929539aa7c4',
          node_id:
            'C_kwDOIKEbg9oAKGMxYmFkMWMwNDkwZmVmYzljYjkyN2M5MzQ3MGEyOTI5NTM5YWE3YzQ',
          commit: {
            author: {
              name: 'Sergio Reyes',
              email: '70583259+sreyescurotto@users.noreply.github.com',
              date: '10/07/2022 12:09:52'
            },
            committer: {
              name: 'GitHub',
              email: 'noreply@github.com',
              date: '2022-10-07T17:09:52Z'
            },
            message: 'Create README.md',
            tree: {
              sha: '6713f77b1bc9bc65f58bd1c7af8e6d31596fffd6',
              url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/trees/6713f77b1bc9bc65f58bd1c7af8e6d31596fffd6'
            },
            url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/git/commits/c1bad1c0490fefc9cb927c93470a2929539aa7c4',
            comment_count: 0,
            verification: {
              verified: true,
              reason: 'valid',
              signature:
                '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJjQF1gCRBK7hj4Ov3rIwAAoCEIAJN091cT+Z3h6uliXQy1SqyA\nx7cK1vUAlLraVkjoV7v5zsk5Oc3ONRG/fZR/bldNM0Xl+Lgw+m/XP1uH2/fXFV3F\nMp/AGtJhRJwk4cK54H61CCcfEikqt7mhLkgY5ow5T5yohUs46Ndl7A138oLOKfr6\n+SwSOHC9rewOXmLe24jTKM1t/zE6hJzCx/PaG1oUlS33viVhNsdyalaQwjMQKM3T\nyU7rVz7GEkL1Fpt1la/SAOEwxzfQM1Prp5/huMfhX4moDghG4vstZgPlGcR+HyhH\nJFM0A/oGY3csnc+48UpEKojLacwjiOyo8tWSOyRIxdFx8L5LN0thvyr2OFkNjww=\n=/6Ub\n-----END PGP SIGNATURE-----\n',
              payload:
                'tree 6713f77b1bc9bc65f58bd1c7af8e6d31596fffd6\nauthor Sergio Reyes <70583259+sreyescurotto@users.noreply.github.com> 1665162592 -0500\ncommitter GitHub <noreply@github.com> 1665162592 -0500\n\nCreate README.md'
            }
          },
          url: 'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/c1bad1c0490fefc9cb927c93470a2929539aa7c4',
          html_url:
            'https://github.com/sreyescurotto/sreyescurotto/commit/c1bad1c0490fefc9cb927c93470a2929539aa7c4',
          comments_url:
            'https://api.github.com/repos/sreyescurotto/sreyescurotto/commits/c1bad1c0490fefc9cb927c93470a2929539aa7c4/comments',
          author: {
            login: 'sreyescurotto',
            id: 70583259,
            node_id: 'MDQ6VXNlcjcwNTgzMjU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/70583259?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/sreyescurotto',
            html_url: 'https://github.com/sreyescurotto',
            followers_url:
              'https://api.github.com/users/sreyescurotto/followers',
            following_url:
              'https://api.github.com/users/sreyescurotto/following{/other_user}',
            gists_url:
              'https://api.github.com/users/sreyescurotto/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/sreyescurotto/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/sreyescurotto/subscriptions',
            organizations_url:
              'https://api.github.com/users/sreyescurotto/orgs',
            repos_url: 'https://api.github.com/users/sreyescurotto/repos',
            events_url:
              'https://api.github.com/users/sreyescurotto/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/sreyescurotto/received_events',
            type: 'User',
            site_admin: false
          },
          committer: {
            login: 'web-flow',
            id: 19864447,
            node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
            avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/web-flow',
            html_url: 'https://github.com/web-flow',
            followers_url: 'https://api.github.com/users/web-flow/followers',
            following_url:
              'https://api.github.com/users/web-flow/following{/other_user}',
            gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/web-flow/subscriptions',
            organizations_url: 'https://api.github.com/users/web-flow/orgs',
            repos_url: 'https://api.github.com/users/web-flow/repos',
            events_url:
              'https://api.github.com/users/web-flow/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/web-flow/received_events',
            type: 'User',
            site_admin: false
          },
          parents: []
        }
      ]
      jest.spyOn(service, 'findAll').mockResolvedValue(mockCommits)

      const result = await controller.findAll('username', 'repository')

      expect(result).toEqual(mockCommits)
    })

    it('should throw NotFoundException for repository or user not found', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockRejectedValue(
          new NotFoundException('Repository or user not found')
        )

      await expect(
        controller.findAll('nonexistentuser', 'nonexistentrepo')
      ).rejects.toThrow(NotFoundException)
    })
  })
})
