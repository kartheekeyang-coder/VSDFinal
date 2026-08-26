import type {
  ChannelId,
  Influencer,
  PlatformId,
  RegionId,
  Sku,
  StockLot,
  Warehouse,
} from "./types";

export const THRESHOLD_VIEWS = 100_000;
export const THRESHOLD_HOURS = 6;

export const REGIONS: RegionId[] = [
  "delhi",
  "mumbai",
  "bangalore",
  "hyderabad",
  "kochi",
  "kolkata",
];

export const WAREHOUSES: Warehouse[] = [
  { id: "delhi", city: "Delhi NCR", hub: "North", x: 0.42, y: 0.18 },
  { id: "kolkata", city: "Kolkata", hub: "East", x: 0.78, y: 0.36 },
  { id: "mumbai", city: "Mumbai", hub: "West", x: 0.18, y: 0.46 },
  { id: "hyderabad", city: "Hyderabad", hub: "Deccan", x: 0.46, y: 0.56 },
  { id: "bangalore", city: "Bengaluru", hub: "South", x: 0.4, y: 0.72 },
  { id: "kochi", city: "Kochi", hub: "Kerala", x: 0.3, y: 0.88 },
];

export const SKUS: Sku[] = [
  {
    id: "nimbus-d4",
    name: "Nimbus Cloud Diapers",
    variant: "Size 4 · 56 pack",
    category: "Baby",
    unitCost: 649,
    bundleWith: "aura-750",
  },
  {
    id: "aura-750",
    name: "Aura Steel Bottle",
    variant: "750 ml · Brushed",
    category: "Home",
    unitCost: 899,
  },
  {
    id: "kite-run",
    name: "Kite Kids Runner",
    variant: "PS · White/Ink",
    category: "Apparel",
    unitCost: 2499,
  },
  {
    id: "bloom-tint",
    name: "Bloom Soft Tint",
    variant: "Guava",
    category: "Beauty",
    unitCost: 795,
  },
  {
    id: "pulse-buds",
    name: "Pulse Clip Buds",
    variant: "Graphite",
    category: "Tech",
    unitCost: 3990,
  },
];

export const INFLUENCERS: Influencer[] = [
  {
    id: "meera",
    name: "Meera V.",
    handle: "meera.nests",
    platform: "instagram",
    niche: "Parenting",
    followers: 1_240_000,
    geo: {
      kochi: 0.22,
      bangalore: 0.38,
      hyderabad: 0.12,
      mumbai: 0.14,
      delhi: 0.08,
      kolkata: 0.06,
    },
  },
  {
    id: "sana",
    name: "Sana K.",
    handle: "sana.k",
    platform: "tiktok",
    niche: "Beauty",
    followers: 890_000,
    geo: {
      mumbai: 0.34,
      delhi: 0.28,
      bangalore: 0.16,
      hyderabad: 0.1,
      kolkata: 0.08,
      kochi: 0.04,
    },
  },
  {
    id: "arjun",
    name: "Arjun Labs",
    handle: "arjunlabs",
    platform: "youtube",
    niche: "Tech",
    followers: 2_100_000,
    geo: {
      bangalore: 0.3,
      hyderabad: 0.22,
      delhi: 0.18,
      mumbai: 0.16,
      kolkata: 0.08,
      kochi: 0.06,
    },
  },
  {
    id: "weekend",
    name: "The Weekend Dad",
    handle: "weekend.dad",
    platform: "instagram",
    niche: "Parenting",
    followers: 410_000,
    geo: {
      mumbai: 0.26,
      delhi: 0.22,
      bangalore: 0.2,
      hyderabad: 0.12,
      kochi: 0.12,
      kolkata: 0.08,
    },
  },
  {
    id: "ria",
    name: "Ria Moves",
    handle: "ria.moves",
    platform: "instagram",
    niche: "Kids fashion",
    followers: 760_000,
    geo: {
      mumbai: 0.4,
      delhi: 0.18,
      bangalore: 0.16,
      hyderabad: 0.1,
      kolkata: 0.1,
      kochi: 0.06,
    },
  },
];

export const CHANNELS: { id: ChannelId; label: string }[] = [
  { id: "amazon", label: "Amazon" },
  { id: "flipkart", label: "Flipkart" },
  { id: "d2c", label: "D2C site" },
  { id: "offline", label: "Offline" },
];

export const PLATFORM_LABEL: Record<PlatformId, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  x: "X",
  tiktok: "TikTok",
};

export const REGION_LABEL: Record<RegionId, string> = {
  delhi: "Delhi NCR",
  mumbai: "Mumbai",
  bangalore: "Bengaluru",
  hyderabad: "Hyderabad",
  kochi: "Kochi",
  kolkata: "Kolkata",
};

export function skuById(id: string): Sku {
  const sku = SKUS.find((s) => s.id === id);
  if (!sku) throw new Error(`Unknown SKU ${id}`);
  return sku;
}

export function influencerById(id: string): Influencer {
  const inf = INFLUENCERS.find((s) => s.id === id);
  if (!inf) throw new Error(`Unknown influencer ${id}`);
  return inf;
}

export function warehouseById(id: RegionId): Warehouse {
  const w = WAREHOUSES.find((s) => s.id === id);
  if (!w) throw new Error(`Unknown warehouse ${id}`);
  return w;
}

export function seedLots(): StockLot[] {
  const table: Record<string, Record<RegionId, [number, number]>> = {
    "nimbus-d4": {
      delhi: [4200, 800],
      mumbai: [1600, 500],
      bangalore: [480, 400],
      hyderabad: [900, 400],
      kochi: [220, 300],
      kolkata: [2800, 500],
    },
    "aura-750": {
      delhi: [1100, 200],
      mumbai: [900, 200],
      bangalore: [700, 200],
      hyderabad: [500, 150],
      kochi: [180, 120],
      kolkata: [640, 150],
    },
    "kite-run": {
      delhi: [320, 80],
      mumbai: [140, 80],
      bangalore: [260, 80],
      hyderabad: [180, 60],
      kochi: [90, 40],
      kolkata: [210, 60],
    },
    "bloom-tint": {
      delhi: [2400, 400],
      mumbai: [1800, 400],
      bangalore: [900, 250],
      hyderabad: [700, 200],
      kochi: [300, 120],
      kolkata: [1100, 250],
    },
    "pulse-buds": {
      delhi: [540, 120],
      mumbai: [410, 100],
      bangalore: [680, 140],
      hyderabad: [390, 100],
      kochi: [80, 40],
      kolkata: [220, 80],
    },
  };

  const lots: StockLot[] = [];
  for (const sku of SKUS) {
    const row = table[sku.id];
    if (!row) continue;
    for (const region of REGIONS) {
      const [onHand, safety] = row[region];
      lots.push({
        skuId: sku.id,
        warehouseId: region,
        onHand,
        safety,
        inTransit: 0,
      });
    }
  }
  return lots;
}
