interface AccordionItem {
  title: string;
  content: React.ReactElement;
  secondary?: boolean;
}

interface AccordionProps {
  title: string;
  description?: string;
  required: boolean;
}

export const AccordionData: Array<AccordionProps> = [
  { title: "data", required: true, description: "Array that contains title and content and secondary" },
  { title: "title", required: true, description: "String" },
  { title: "content", required: true, description: "React Element" },
  { title: "secondary", required: false, description: "Hides the button" },
  { title: "theme", required: false, description: "Theme element" },
] as const;