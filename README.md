# Surge — Viral Demand Desk (VDS)

Ops console for influencer-driven demand spikes. Detects social signals, scores urgency, reallocates stock across Indian hubs, and writes a Grok briefing from the six-step playbook.

## What it does

- Live signal board (views, likes, shares) with a 100k / 6h spike threshold
- Warehouse network: Delhi, Mumbai, Bengaluru, Hyderabad, Kochi, Kolkata
- Surge agent: detect → assess → reallocate → fulfill → forecast → review
- Express lanes and a viral case library

## Run

```bash
npm install
npm run dev
```

The app expects the Grok App Builder stack (TanStack Start, Vite on port 8080). AI briefings use `XAI_API_KEY` on the server when present; the playbook still runs without it.
