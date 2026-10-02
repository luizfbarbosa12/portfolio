import { siteConfig } from '@/config/site';

const themeScript = `document.documentElement.dataset.theme = ${JSON.stringify(siteConfig.theme.default)};`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
