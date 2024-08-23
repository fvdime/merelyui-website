interface ThemeDataProps {
  title: string;
  rgb: string;
}

export const ThemeData: Array<ThemeDataProps> = [
  { title: "--color-fill", rgb: "102, 102, 204" },
  { title: "--color-muted", rgb: "25, 25, 45" },
  { title: "--color-inverted", rgb: "0, 0, 10" },
  { title: "--color-text-base", rgb: "0, 0, 10" },
  { title: "--color-text-soft", rgb: "100, 150, 200" },
  { title: "--color-text-muted", rgb: "130, 130, 190" },
  { title: "--color-text-inverted", rgb: "240, 245, 255" },
  { title: "--color-text-destructive", rgb: "102, 51, 153" },
  { title: "--color-button-accent", rgb: "34, 85, 102" },
  { title: "--color-button-accent-hover", rgb: "44, 110, 130" },
  { title: "--color-button-muted", rgb: "200, 210, 220" },
  { title: "--color-button-destructive", rgb: "120, 0, 80" },
  { title: "--color-button-destructive-hover", rgb: "140, 10, 100" },
  { title: "--color-border-base", rgb: "180, 200, 230" },
  { title: "--color-border-muted", rgb: "220, 225, 235" },
  { title: "--color-border-inverted", rgb: "102, 51, 153" },
  { title: "--color-border-danger", rgb: "153, 0, 51" },
  { title: "--color-border-success", rgb: "25, 110, 125" },
  { title: "--color-border-info", rgb: "80, 140, 210" },
  { title: "--color-border-warning", rgb: "190, 160, 75" },
  { title: "--color-outline-base", rgb: "160, 190, 220" },
  { title: "--color-outline-muted", rgb: "230, 235, 240" },
  { title: "--color-outline-inverted", rgb: "34, 85, 102" },
  { title: "--color-ring-base", rgb: "160, 190, 220" },
  { title: "--color-ring-muted", rgb: "240, 245, 255" },
  { title: "--color-ring-inverted", rgb: "34, 85, 102" },
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