import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
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

        <div className="flex flex-col sm:flex-row gap-x-16 gap-y-4">
          <div className="flex shadow-theme bg-white rounded overflow-hidden box p-0">
            <div className="relative border-r-[3px] border-black w-fit">
              <select
                name="options"
                id="options"
                defaultValue="exclude"
                className="p-2 pr-8 bg-[#E6E8EB] text-black [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden outline-none !rounded-none"
                aria-label="Include or exclude files"
              >
                <option value="exclude">Exclude</option>
                <option value="include">Include</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <input
              type="text"
              name="file_type"
              id="file_type"
              placeholder="*.md, src/"
              className="outline-none p-2 min-w-[200px] placeholder:text-gray-400/80"
              aria-label="File patterns to include or exclude"
            />
          </div>
        </div>

        <div className="space-y-2">
          <p>See it in Action? Try these example repositories:</p>

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
