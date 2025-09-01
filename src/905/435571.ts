import { b } from "../905/275748";
export let $$n0 = new b({
  name: "billing_cart",
  description: "Code related to checkout and plan tier upgrades",
  dependencies: [],
  exports: {
    "./modals": "./modals.ts",
    "./utils": "./utils.ts",
    "./types": "./lib/types.ts",
    "./views": "./views.ts",
    "./modal_content": "./modal_content.ts",
    "./choose_plan_modal": "./choose_plan_modal.ts"
  },
  sideEffects: !1,
  routeHints: ["file_browser"],
  exceptions: [{
    path: "js/billing/cart/modals/universal_upgrade/comparison_chart/comparison_chart",
    specifiers: ["ComparisonChart", "ComparisonChartProps"],
    importers: ["js/browse/file_browser/views/team_upgrade/step_upgrade_new_team.tsx"]
  }],
  eslint: {
    rules: {
      "react/no-array-index-key": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
});
export const A = $$n0;