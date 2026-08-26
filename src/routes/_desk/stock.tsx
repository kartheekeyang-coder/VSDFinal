import { createFileRoute } from "@tanstack/react-router";
import { StockView } from "@/components/surge/views";

export const Route = createFileRoute("/_desk/stock")({
  component: StockView,
});
