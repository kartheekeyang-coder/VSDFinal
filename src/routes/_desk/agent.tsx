import { createFileRoute } from "@tanstack/react-router";
import { AgentView } from "@/components/surge/views";

export const Route = createFileRoute("/_desk/agent")({
  component: AgentView,
});
