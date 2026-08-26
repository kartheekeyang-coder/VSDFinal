import { createFileRoute } from "@tanstack/react-router";
import { BoardView } from "@/components/surge/views";

export const Route = createFileRoute("/_desk/")({
  component: BoardView,
});
