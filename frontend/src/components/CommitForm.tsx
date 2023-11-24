import { useState } from "react";
import { ParamsFindAll } from "../interfaces/params.interface";

interface Props {
  search: (params: ParamsFindAll) => Promise<void>
}
export const CommitForm = ({ search } : Props) => {
  const username = "sreyescurotto"
  const [repository, setRepository] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await search({ username, repository })
  };
  const updateValue = (
    target: HTMLInputElement,
    setFun: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFun(target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="instructions flex gap-6 md:flex-row flex-col items-center md:items-stretch"
    >
      <label className="font-light">
        Username
        <input
          value={username}
          placeholder="Example: sreyescurotto"
          readOnly
          className="font-normal w-full outline-none focus:border-main focus:ring-2 ring-inset ring-main bg-transparent py-1 px-3 border-slate-400 border rounded"
        />
      </label>
      <label className="font-light">
        Repository
        <input
          name="repository"
          value={repository}
          onChange={(e) =>
            updateValue(e.target, setRepository)
          }
          placeholder="Example: fulltime-force-tt"
          required
          className="font-normal w-full outline-none focus:border-main focus:ring-2 ring-inset ring-main bg-transparent py-1 px-3 border-slate-400 border rounded"
        />
      </label>
      <button className="bg-slate-700 rounded p-3  hover:bg-slate-800 transition max-custom-width">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </button>
    </form>
  );
};
