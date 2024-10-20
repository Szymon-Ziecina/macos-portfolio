import { GithubRepoType } from "@/types";
import React from "react";
import Image from "next/image";

const Finder = ({ userRepos }: { userRepos: GithubRepoType[] }) => {
  return (
    <div className="flex flex-col gap-2 relative bg-white h-full w-full p-2 border-t-2 border-gray-400/50">
      {userRepos.map((repo) => (
        <div
          key={repo.name}
          className="w-full flex gap-2 even:bg-gray-100 odd:bg-white p-2 rounded-lg hover:bg-gray-200 transition-all duration-150"
        >
          <Image
            draggable={false}
            src="/images/Folder.png"
            alt={repo.name}
            width={28}
            height={28}
          />
          <a className="text-lg" target="_blank" href={repo.html_url}>
            {repo.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Finder;
