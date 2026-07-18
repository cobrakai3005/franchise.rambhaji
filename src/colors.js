// SheRise-style card color schemes mapped to brand colors
export const colorSchemes = {
  // #33C3FF (cyan) → Tailwind sky scale
  "#33C3FF": {
    bg: "#f0f9ff",
    border: "#7dd3fc",
    title: "#0369a1",
    icon: "#0284c7",
    iconBg1: "#e0f2fe",
    iconBg2: "#bae6fd",
    shadow: "rgba(2,132,199,0.15)",
  },
  // #EA33FF (magenta) → Tailwind pink scale
  "#EA33FF": {
    bg: "#fdf2f8",
    border: "#f9a8d4",
    title: "#be185d",
    icon: "#db2777",
    iconBg1: "#fce7f3",
    iconBg2: "#fbcfe8",
    shadow: "rgba(219,39,119,0.15)",
  },
  // #3342FF (indigo) → Tailwind indigo scale
  "#3342FF": {
    bg: "#eef2ff",
    border: "#a5b4fc",
    title: "#4338ca",
    icon: "#4f46e5",
    iconBg1: "#e0e7ff",
    iconBg2: "#c7d2fe",
    shadow: "rgba(79,70,229,0.15)",
  },
};

export function scheme(color) {
  return colorSchemes[color] || colorSchemes["#33C3FF"];
}
