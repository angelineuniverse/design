export interface ModelTabItem {
  label: string;
  value: string | number;
  children?: any;
}

export const sanitizeForId = (label: string) => {
  return label
    .toLowerCase()
    .replace(/[^\w\s]|(\s+)/g, (_match: string, group1: string) =>
      group1 ? "-" : ""
    );
}