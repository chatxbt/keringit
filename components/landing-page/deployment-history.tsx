import { Clock, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const MOCK_DEPLOYMENTS = [
  {
    id: "dep-123",
    repo: "UniswapV4",
    chain: "Base",
    status: "completed",
    timestamp: "2 hours ago",
    address: "0x1234...5678",
  },
  {
    id: "dep-124",
    repo: "Aave",
    chain: "Solana",
    status: "in_progress",
    timestamp: "15 minutes ago",
    address: null,
  },
  {
    id: "dep-125",
    repo: "MorphoV1.1",
    chain: "Ethereum",
    status: "failed",
    timestamp: "1 day ago",
    address: null,
  },
];

export function DeploymentHistory() {
  return (
    <div className="box p-4 bg-white">
      <h3 className="font-bold text-lg mb-4">Recent Deployments</h3>

      <div className="space-y-3">
        {MOCK_DEPLOYMENTS.map((deployment) => (
          <div
            key={deployment.id}
            className="flex items-center justify-between p-3 border-2 border-black rounded-md"
          >
            <div className="flex items-center gap-3">
              {deployment.status === "completed" && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {deployment.status === "in_progress" && (
                <Clock className="h-5 w-5 text-blue-500" />
              )}
              {deployment.status === "failed" && (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              )}

              <div>
                <p className="font-semibold">{deployment.repo}</p>
                <p className="text-sm text-gray-600">
                  {deployment.chain} • {deployment.timestamp}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              {deployment.address && (
                <span className="font-mono text-sm mr-2">
                  {deployment.address}
                </span>
              )}
              <button className="p-1 rounded-full hover:bg-gray-100">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full text-center mt-3 text-[#00B4D8] font-medium">
        View all deployments
      </button>
    </div>
  );
}
