import { useState } from "react";
import { ThemeButton } from "../ui/theme-button";
import { Select } from "../ui/select";

const BLOCKCHAIN_OPTIONS = [
  { value: "base", label: "Base" },
  { value: "solana", label: "Solana" },
  { value: "megaeth", label: "MegaETH" },
  { value: "btc", label: "Bitcoin" },
  { value: "ethereum", label: "Ethereum" },
  { value: "polygon", label: "Polygon" },
  { value: "arbitrum", label: "Arbitrum" },
];

export function DeploymentConfig() {
  const [selectedChain, setSelectedChain] = useState("base");
  const [customParams, setCustomParams] = useState("");
  const [optimizationLevel, setOptimizationLevel] = useState("standard");

  const handleDeploy = () => {
    console.log("Deploying to:", selectedChain);
    console.log("Optimization level:", optimizationLevel);
    console.log("Custom parameters:", customParams);
    // Here you would trigger the deployment process
  };

  return (
    <div className="box p-4 bg-[#CAF0F8] rounded-xl">
      <h3 className="font-bold text-lg mb-4">Deployment Configuration</h3>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block font-semibold mb-2">
              Target Blockchain
            </label>
            <Select
              options={BLOCKCHAIN_OPTIONS}
              value={selectedChain}
              onChange={setSelectedChain}
              className="w-full"
              aria-label="Select target blockchain"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block font-semibold mb-2">Gas Optimization</label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`flex-1 py-2 px-4 bg-white border-2 border-black rounded-md font-medium hover:bg-gray-100 ${
                  optimizationLevel === "standard" ? "bg-gray-200" : ""
                }`}
                aria-pressed={optimizationLevel === "standard"}
                onClick={() => setOptimizationLevel("standard")}
              >
                Standard
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 bg-white border-2 border-black rounded-md font-medium hover:bg-gray-100 ${
                  optimizationLevel === "aggressive" ? "bg-gray-200" : ""
                }`}
                aria-pressed={optimizationLevel === "aggressive"}
                onClick={() => setOptimizationLevel("aggressive")}
              >
                Aggressive
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Custom Parameters (Optional)
          </label>
          <textarea
            value={customParams}
            onChange={(e) => setCustomParams(e.target.value)}
            placeholder="Enter custom deployment parameters..."
            className="w-full p-3 border-2 border-black rounded-md resize-y min-h-[80px]"
            aria-label="Custom deployment parameters"
          />
        </div>

        <ThemeButton
          className="w-full py-3 bg-[#FB5607] text-white font-bold text-lg"
          onClick={handleDeploy}
          type="button"
        >
          Deploy to{" "}
          {BLOCKCHAIN_OPTIONS.find((o) => o.value === selectedChain)?.label ||
            selectedChain}
        </ThemeButton>
      </div>
    </div>
  );
}
