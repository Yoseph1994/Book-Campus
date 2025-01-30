import { config } from "@/config";
import { Client as WorkflowClient } from "@upstash/workflow";
export const workflowClient = new WorkflowClient({
  token: config.env.upstash.qstashToken,
  baseUrl: config.env.upstash.qstashUrl,
});
