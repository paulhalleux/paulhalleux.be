import { MarkdownViewer } from "../../MarkdownViewer/MarkdownViewer";

export function AboutHobbies() {
  const code =
    "# Hobbies\n\n- Watching series\n- Learning new things\n- Going out";
  return <MarkdownViewer code={code} />;
}
