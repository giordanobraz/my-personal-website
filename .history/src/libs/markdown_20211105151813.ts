import { remark } from "remark";
import html from "remark-html";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";

export default async function markdownToHtml(markdown: any) {
  const result = await remark()
    .use(remarkPresetLintRecommended)
    .use(html)
    .process(markdown);
  return result.toString();
}
