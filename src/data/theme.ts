interface ThemeDataProps {
  title: string;
  rgb: string;
  description: string;
}

export const ThemeData: Array<ThemeDataProps> = [
  { title: "--color-fill", rgb: "102, 102, 204", description: "desc" },
  { title: "--color-muted", rgb: "25, 25, 45", description: "desc" },
  { title: "--color-inverted", rgb: "0, 0, 10", description: "desc" },
  { title: "--color-text-base", rgb: "0, 0, 10", description: "desc" },
  { title: "--color-text-soft", rgb: "100, 150, 200", description: "desc" },
  { title: "--color-text-muted", rgb: "130, 130, 190", description: "desc" },
  { title: "--color-text-inverted", rgb: "240, 245, 255", description: "desc" },
  { title: "--color-text-destructive", rgb: "102, 51, 153", description: "desc" },
  { title: "--color-button-accent", rgb: "34, 85, 102", description: "desc" },
  { title: "--color-button-accent-hover", rgb: "44, 110, 130", description: "desc" },
  { title: "--color-button-muted", rgb: "200, 210, 220", description: "desc" },
  { title: "--color-button-destructive", rgb: "120, 0, 80", description: "desc" },
  { title: "--color-button-destructive-hover", rgb: "140, 10, 100", description: "desc" },
  { title: "--color-border-base", rgb: "180, 200, 230", description: "desc" },
  { title: "--color-border-muted", rgb: "220, 225, 235", description: "desc" },
  { title: "--color-border-inverted", rgb: "102, 51, 153", description: "desc" },
  { title: "--color-border-danger", rgb: "153, 0, 51", description: "desc" },
  { title: "--color-border-success", rgb: "25, 110, 125", description: "desc" },
  { title: "--color-border-info", rgb: "80, 140, 210", description: "desc" },
  { title: "--color-border-warning", rgb: "190, 160, 75", description: "desc" },
  { title: "--color-outline-base", rgb: "160, 190, 220", description: "desc" },
  { title: "--color-outline-muted", rgb: "230, 235, 240", description: "desc" },
  { title: "--color-outline-inverted", rgb: "34, 85, 102", description: "desc" },
  { title: "--color-ring-base", rgb: "160, 190, 220", description: "desc" },
  { title: "--color-ring-muted", rgb: "240, 245, 255", description: "desc" },
  { title: "--color-ring-inverted", rgb: "34, 85, 102", description: "desc" },
] as const;

interface ColorArray {
  title: string;
  rgb: string;
}

interface ColorDataProps {
  title: string;
  color: ColorArray[];
}

export const ColorData: Array<ColorDataProps> = [
  {
    title: "textColor",
    color: [
      { title: "base", rgb: "--color-text-base" },
      { title: "soft", rgb: "--color-text-soft" },
      { title: "muted", rgb: "--color-text-muted" },
      { title: "inverted", rgb: "--color-text-inverted" },
    ]
  },
  {
    title: "backgroundColor",
    color: [
      { title: "fill", rgb: "--color-fill" },
      { title: "muted", rgb: "--color-muted" },
      { title: "inverted", rgb: "--color-inverted" },
      { title: "button-accent", rgb: "--color-button-accent" },
      { title: "button-accent-hover", rgb: "--color-button-accent-hover" },
      { title: "button-inverted", rgb: "--color-button-inverted" },
      { title: "button-inverted-hover", rgb: "--color-button-inverted-hover" },
      { title: "button-destructive", rgb: "--color-button-destructive" },
      { title: "button-destructive-hover", rgb: "--color-button-destructive-hover" },
    ]
  },
  {
    title: "borderColor",
    color: [
      { title: "base", rgb: "--color-border-base" },
      { title: "muted", rgb: "--color-border-muted" },
      { title: "inverted", rgb: "--color-border-inverted" },
      { title: "info", rgb: "--color-border-info" },
      { title: "success", rgb: "--color-border-success" },
      { title: "danger", rgb: "--color-border-danger" },
      { title: "warning", rgb: "--color-border-warning" },
    ]
  },
  {
    title: "outlineColor",
    color: [
      { title: "base", rgb: "--color-outline-base" },
      { title: "muted", rgb: "--color-outline-muted" },
      { title: "inverted", rgb: "--color-outline-inverted" },
    ]
  },
  {
    title: "ringColor",
    color: [
      { title: "base", rgb: "--color-ring-base" },
      { title: "muted", rgb: "--color-ring-muted" },
      { title: "inverted", rgb: "--color-ring-inverted" },
    ]
  },
  {
    title: "gradientColorStops",
    color: [
      { title: "hue", rgb: "--color-fill" },
    ]
  },
] as const;