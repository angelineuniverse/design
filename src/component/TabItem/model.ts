export interface ModelTabItem {
  label: string;
  value: string | number;
  children?: React.ReactElement;
}

export const sanitizeForId = (label: string) => {
  return label
    .toLowerCase()
    .replace(/[^\w\s]|(\s+)/g, (_match: string, group1: string) =>
      group1 ? "-" : ""
    );
}