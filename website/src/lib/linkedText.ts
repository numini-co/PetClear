const LINK_RE = /\[([^\]]+)\]\((\/[^)]+)\)/g

export function stripInternalMarkdownLinks(text: string): string {
  return text.replace(LINK_RE, '$1')
}

export { LINK_RE }
