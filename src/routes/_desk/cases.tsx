import { createFileRoute } from "@tanstack/react-router";
import { CasesView } from "@/components/surge/views";

export const Route = createFileRoute("/_desk/cases")({
  component: CasesView,
});
