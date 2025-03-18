"use client";

import { HeroSection } from "./hero-section";
import { RepoForm } from "./repo-form";
import { ResultPanel } from "./result-panel";
import { ChatPanel } from "./chat-panel";
import { DeploymentConfig } from "./deployment-config";
import { RepoComparison } from "./repo-comparison";
import { DeploymentHistory } from "./deployment-history";

export function LandingPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <HeroSection />
        <RepoForm />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="space-y-8">
            <ResultPanel />
            {/* <DeploymentConfig /> */}
            {/* <DeploymentHistory /> */}
          </div>
          <div className="space-y-8">
            <ChatPanel />
            {/* <RepoComparison /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

//
