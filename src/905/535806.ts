
export enum SourceDirection {
  TO_SOURCE = "to_source",
  FROM_SOURCE = "from_source",
}


export enum CPPEventType {
  ON_MERGE = "on_merge",
  UNHANDLED = "unhandled",
  CPP = "cpp",
  MODAL = "modal",
}

export enum AggregationType {
  TOTAL = "total",
  GRANULAR = "granular",
}


export enum LanguageType {
  CPP_ONLY = "cpp_only",
  JAVASCRIPT_ONLY = "js_only", // Note: Original has typo "JAVACRIPT_ONLY"
}


export enum ViewType {
  SUMMARY = "summary",
  DETAIL = "detail",
  COMPARE_THUMBNAIL = "compare_thumbnail",
}

export enum BranchType {
  MAIN = "main",
  BRANCH = "branch",
}

export const Kn = SourceDirection;
export const NQ = LanguageType;
export const PW = CPPEventType;
export const Wo = BranchType;
export const ap = AggregationType;
export const mg = ViewType;

