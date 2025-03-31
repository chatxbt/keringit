import { useState } from "react";
import { ThemeButton } from "../ui/theme-button";
import { GitBranch, GitCompare } from "lucide-react";

export function RepoComparison() {
  const [showDiff, setShowDiff] = useState(false);

  return (
    <div className="box p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Compare Changes</h3>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded-md ${
              !showDiff ? "bg-[#7D80DA] text-white" : "bg-gray-200"
            }`}
            onClick={() => setShowDiff(false)}
          >
            Files
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              showDiff ? "bg-[#7D80DA] text-white" : "bg-gray-200"
            }`}
            onClick={() => setShowDiff(true)}
          >
            Diff View
          </button>
        </div>
      </div>

      {!showDiff ? (
        <div className="space-y-2">
          <div className="flex justify-between p-2 bg-[#D8F3DC] rounded-md">
            <span className="font-mono">contracts/Token.sol</span>
            <span className="text-green-600">Modified</span>
          </div>
          <div className="flex justify-between p-2 bg-[#D8F3DC] rounded-md">
            <span className="font-mono">contracts/Vault.sol</span>
            <span className="text-green-600">Modified</span>
          </div>
          <div className="flex justify-between p-2 bg-[#D8F3DC] rounded-md">
            <span className="font-mono">contracts/Governance.sol</span>
            <span className="text-blue-600">Unchanged</span>
          </div>
        </div>
      ) : (
        <div className="font-mono text-sm bg-[#D8F3DC] p-3 rounded-md h-[300px] overflow-auto">
          <pre>{`diff --git a/contracts/Token.sol b/contracts/Token.sol
index 1234567..abcdefg 100644
--- a/contracts/Token.sol
+++ b/contracts/Token.sol
@@ -15,7 +15,7 @@ contract Token is ERC20 {
     uint256 public constant MAX_SUPPLY = 1000000 * 10**18;
-    uint256 public constant INITIAL_SUPPLY = 100000 * 10**18;
+    uint256 public constant INITIAL_SUPPLY = 500000 * 10**18;
     
     constructor() ERC20("MyToken", "MTK") {
         _mint(msg.sender, INITIAL_SUPPLY);`}</pre>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        <ThemeButton className="flex-1 bg-[#00B4D8]">
          <GitBranch className="h-4 w-4 mr-2" />
          Fork Repository
        </ThemeButton>
        <ThemeButton className="flex-1 bg-[#00B4D8]">
          <GitCompare className="h-4 w-4 mr-2" />
          View All Changes
        </ThemeButton>
      </div>
    </div>
  );
}
