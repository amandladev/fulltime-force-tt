import { APIGitHubAuthor, Commit } from "../types/commits.type";

interface Props {
  author: APIGitHubAuthor;
  commit: Commit;
  url: string;
  sha: string;
}
export const CommitChild = ({ author, commit, url, sha }: Props) => {
  const redirect = () => {
    window.open(url, "_blank");
  };
  return (
    <article
      onClick={redirect}
      className="flex flex-col md:flex-row w-full gap-3 justify-between border bg-transparent transition hover:bg-slate-900 cursor-pointer border-main rounded-xl p-3 md:p-6 my-2"
    >
      <header className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden h-14 w-14 md:h-20 md:w-20">
          <img
            src={author.avatar_url}
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        </div>
        {/* <p className="mt-3 text-center text-sm md:text-xl text-gray-200">{commit.author.name}</p> */}
      </header>
      <div>
        <h2 className="text-lg font-semibold text-center text-main">ID</h2>
        <p className="mt-2 text-sm md:text-xl text-gray-200">{sha}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold text-center text-main">Message</h2>
        <p className="mt-2 text-sm md:text-xl text-gray-200">{commit.message}</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold text-center text-main">Status</h2>
        <p className={`mt-2 text-sm md:text-xl ${commit.verification.verified ? 'text-green-400' : 'text-gray-200' } `}>{commit.verification.verified ? 'Verified' : 'Non Verified'}</p>
      </div>
      <footer className="flex flex-col items-center">
        <h2 className="text-lg font-semibold text-center text-main">Date</h2>
        <time dateTime="2002-04-03" className="mt-2 text-sm md:text-xl text-gray-200">
          {commit.author.date.toString()}
        </time>
      </footer>
    </article>
  );
};
