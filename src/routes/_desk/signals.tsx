import { createFileRoute } from "@tanstack/react-router";
import { SignalsView } from "@/components/surge/views";

export const Route = createFileRoute("/_desk/signals")({
  component: SignalsView,
});
