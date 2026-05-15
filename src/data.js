// Tier 1: Weekly Pulse (PM Quick Check)
export const weeklyPulse = [
  { metric: "Sprint Health", value: "88%", status: "Good", detail: "Resolved 42/48 tickets" },
  { metric: "Ops Friction", value: "High", status: "Warning", detail: "Field Mapping spike in W18" },
  { metric: "Automation Coverage", value: "12%", status: "Low", detail: "Target: 40% by Q2" }
];

export const sprintVelocity = [
  { week: "W15", raised: 10, resolved: 12, debt: -2 },
  { week: "W16", raised: 12, resolved: 10, debt: 2 },
  { week: "W17", raised: 13, resolved: 14, debt: -1 },
  { week: "W18", raised: 19, resolved: 15, debt: 4 },
  { week: "W19", raised: 9, resolved: 11, debt: -2 },
];

// Tier 2: Friction Heatmap (Amplitude-style)
export const frictionHeatmap = [
  { category: "Mapping", mmt: 45, hdfc: 30, plum: 15, others: 9 },
  { category: "Sync", mmt: 20, hdfc: 25, plum: 10, others: 11 },
  { category: "Support", mmt: 60, hdfc: 40, plum: 30, others: 62 },
  { category: "Setup", mmt: 15, hdfc: 20, plum: 25, others: 29 },
];

// Tier 3: Strategic Resolution Matrix
export const resolutionMatrix = [
  { 
    theme: "Sync Failures", 
    frequency: 142, 
    complexity: "High", 
    productFix: "Auto-Retry Engine",
    impactScore: 92,
    priority: "P1"
  },
  { 
    theme: "Field Mapping", 
    frequency: 99, 
    complexity: "Medium", 
    productFix: "Smart Mapper UI",
    impactScore: 88,
    priority: "P1"
  },
  { 
    theme: "Auth/Access", 
    frequency: 42, 
    complexity: "Low", 
    productFix: "Self-Serve Vault",
    impactScore: 45,
    priority: "P2"
  },
  { 
    theme: "Bulk Cleanup", 
    frequency: 28, 
    complexity: "Low", 
    productFix: "Maintenance API",
    impactScore: 30,
    priority: "P3"
  }
];

// Common Data
export const primaryCategories = [
  { name: "General Support", count: 192, color: "#6366f1" },
  { name: "Field Mapping", count: 99, color: "#8b5cf6" },
  { name: "Integration Setup", count: 89, color: "#ec4899" },
  { name: "Sync Failures", count: 66, color: "#f43f5e" },
  { name: "UI/UX Issues", count: 25, color: "#f59e0b" },
  { name: "Auth/Access", count: 18, color: "#10b981" }
];

export const kpis = [
  { label: "Active Connections", value: "248", trend: "+8%", color: "indigo" },
  { label: "Ops Overhead", value: "160h/mo", trend: "Critical", color: "rose" },
  { label: "Resolution Rate", value: "82%", trend: "Improving", color: "emerald" },
  { label: "Debt Accumulation", value: "+4", trend: "Warning", color: "amber" }
];

export const growthData = [
  { name: 'May', volume: 45, bottleneck: 20 },
  { name: 'Jun', volume: 52, bottleneck: 25 },
  { name: 'Jul', volume: 68, bottleneck: 35 },
  { name: 'Aug', volume: 61, bottleneck: 30 },
  { name: 'Sep', volume: 84, bottleneck: 45 },
  { name: 'Oct', volume: 72, bottleneck: 40 },
  { name: 'Nov', volume: 65, bottleneck: 38 },
  { name: 'Dec', volume: 89, bottleneck: 52 },
  { name: 'Jan', volume: 92, bottleneck: 55 },
  { name: 'Feb', volume: 95, bottleneck: 58 },
  { name: 'Mar', volume: 88, bottleneck: 50 },
  { name: 'Apr', volume: 112, bottleneck: 70 },
];
