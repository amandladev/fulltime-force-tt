import { useState } from "react";

import { CommitForm } from "./components/CommitForm";
import { APIGitHub } from "./types/commits.type";
import { ParamsFindAll } from "./types/params.type";
import { CommitService } from "./services/commit.service";
import { CommitChild } from "./components/CommitChild";
import "./App.css";

function App() {
  const [commits, setCommits] = useState<APIGitHub[]>([]);
  const [searchStatus, setStatusSearch] = useState(true);
  const searchCommits = async (params: ParamsFindAll) => {
    const commitService = new CommitService();
    const { data, status } = await commitService.findAll(params);
    setCommits(data);
    setStatusSearch(status);
  };

  return (
    <main>
      <header>
        <h1 className="uppercase text-4xl md:text-6xl">
          FullTime Force <span className="text-gradient">Challenge</span>
        </h1>
      </header>
      <section className="instructions">
        <p className="text-lg md:text-2xl">
          Welcome to my <strong>Take-Home Test.</strong>
          <br />You are free to set any 
          <code>repository</code> from my profile that you want.
        </p>
        <p className="text-gray-300 text-sm mt-3">
          Remember: This implementation is specting a{" "}
          <strong className="font-bold">Public Repository</strong>
        </p>
      </section>
      <CommitForm search={searchCommits} />
      <section className="custom-max-height overflow-y-auto">
        {searchStatus && commits.length > 0 ? (
          commits.map(({ commit, author, html_url, sha }, index) => (
            <CommitChild commit={commit} url={html_url} author={author} sha={sha} key={index}/>
          ))
        ) : searchStatus && commits.length === 0 ? (
          <h1>There are no commits to show yet ...</h1>
        ) : (
          <h1>Oops! Can not find commits with that info ...</h1>
        )}
      </section>
    </main>
  );
}

export default App;
