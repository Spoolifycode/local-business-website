import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  const dirtyHtml = marked.parse(markdown, { breaks: true });
  return DOMPurify.sanitize(dirtyHtml);
}