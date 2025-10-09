// Refactored navigation routes from minified code. Renamed variables for clarity, added const assertion for type safety, removed unnecessary IIFE, and ensured clean formatting. Original code name: $$n0. Assumes this defines route strings for navigation (e.g., HOME as root path "").

export const navigationRoutes = {
  HOME: "",
  YOUR_TEAMS: "your-teams",
  CONNECTED_PROJECTS: "connected-projects",
  LIBRARIES: "libraries",
  FONTS: "fonts",
  PLUGINS: "plugins",
  WIDGETS: "widgets",
} as const;


export const X = navigationRoutes
