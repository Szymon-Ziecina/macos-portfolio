import { fetchGithubRepos, fetchGithubUser } from "@/lib/actions/user.action";
import Window from "@/components/interface/Window";

const app = async () => {
  const user = await fetchGithubUser("Szymon-Ziecina");
  let repos = await fetchGithubRepos("Szymon-Ziecina");
  if (!repos) repos = [];
  return <Window userRepos={repos} userData={user!} />;
};

export default app;
