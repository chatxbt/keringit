import { useState } from "react";
import { BookOpen } from "lucide-react";
import { ThemeButton } from "../ui/theme-button";

const EXAMPLE_REPOS = [
  "Keringit",
  "UniswapV4",
  "Layerzer0",
  "Aave",
  "MorphoV1.1",
  "PendleV2",
];

export function RepoForm() {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl.trim()) {
      alert("Please enter a repository URL");
      return;
    }
    console.log("Submitted repo:", repoUrl);
  };

  const handleExampleClick = (repo: string) => {
    setRepoUrl(`https://github.com/example/${repo}`);
  };

  return (
    <div className="py-8 px-4 sm:px-11 md:px-16 mb-8 rounded-xl bg-[#CAF0F8] box">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex w-full flex-col sm:flex-row gap-8 items-center justify-center">
          <div className="flex-1 w-full box bg-white flex items-center justify-start">
            <input
              placeholder="Enter GitHub repository URL"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full shadow-none bg-white border-none bg-transparent outline-none p-4 text-2xl font-semibold placeholder:text-gray-500 placeholder:text-xl placeholder:font-normal"
              aria-label="GitHub repository URL"
            />
          </div>
          <ThemeButton type="submit">
            <BookOpen className="h-5 w-5" />
            Go
          </ThemeButton>
        </div>

        <div className="space-y-2 font-medium">
          <p>See it in Action? Try forking these example repositories:</p>

          <div className="flex w-full flex-wrap gap-4">
            {EXAMPLE_REPOS.map((repo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleExampleClick(repo)}
                className="px-3 py-1 font-bold bg-[#D8F3DC] hover:bg-[#95B8A1] border-[3px] border-black rounded-sm"
              >
                {repo}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
