# Performance log

## Phase 1: scaffold

Measured on 2026-10-02 with Next.js 16.3.8, React 19.2.8 and a production Webpack build.

| Check                      |         Result |            Budget |
| -------------------------- | -------------: | ----------------: |
| Lighthouse Performance     |            100 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |
| Lighthouse SEO             |            100 |               100 |
| Largest Contentful Paint   |       1,742 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |        Under 0.05 |
| Total Blocking Time        |          36 ms |      Under 150 ms |
| Home first-load JavaScript | 130.59 kB gzip | Under 150 kB gzip |

Lighthouse values are the median of three mobile runs. The initial 120 kB JavaScript budget was
revised with Luiz's approval because an empty Next.js 16 App Router page measured 127.85 kB gzip
with Webpack and 130.38 kB gzip with Turbopack before portfolio interactions were added.

## Phase 2: tokens and fonts

Measured on 2026-10-02 after adding both theme palettes, the font stand-ins and the token preview.

| Check                      |         Result |            Budget |
| -------------------------- | -------------: | ----------------: |
| Lighthouse Performance     |            100 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |
| Lighthouse SEO             |            100 |               100 |
| Largest Contentful Paint   |       1,899 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |        Under 0.05 |
| Total Blocking Time        |          41 ms |      Under 150 ms |
| Home first-load JavaScript | 130.62 kB gzip | Under 150 kB gzip |
| Font files loaded          |              3 |        4 or fewer |

Lighthouse values are the median of three mobile runs. Hanken Grotesk, JetBrains Mono and La Belle
Aurore are temporary stand-ins. Aujournuit web embedding is licensed, but its files are not yet in
the repository. Aquavit and P22 Da Vinci remain blocked on the Adobe Fonts kit ID.

## Phase 3: static portfolio

Measured on 2026-10-02 after implementing the complete static home page and the public case-study
template.

| Check                      |    Home result | Case-study result |            Budget |
| -------------------------- | -------------: | ----------------: | ----------------: |
| Lighthouse Performance     |             99 |                99 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |               100 |
| Lighthouse SEO             |            100 |               100 |               100 |
| Largest Contentful Paint   |       1,935 ms |          1,967 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |                 0 |        Under 0.05 |
| Total Blocking Time        |          75 ms |             66 ms |      Under 150 ms |
| Home first-load JavaScript | 130.62 kB gzip |                 - | Under 150 kB gzip |

Lighthouse values are the median of three mobile runs per route. The home and case-study pages are
Server Components, and both public case studies are generated statically.

## Phase 4: MDX case studies

Measured on 2026-10-02 after moving the narrative content for both public case studies into local
MDX documents while preserving static generation.

| Check                      |    Home result | Case-study result |            Budget |
| -------------------------- | -------------: | ----------------: | ----------------: |
| Lighthouse Performance     |            100 |               100 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |               100 |
| Lighthouse SEO             |            100 |               100 |               100 |
| Largest Contentful Paint   |       1,897 ms |          1,900 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |                 0 |        Under 0.05 |
| Total Blocking Time        |          40 ms |             44 ms |      Under 150 ms |
| Home first-load JavaScript | 130.62 kB gzip |                 - | Under 150 kB gzip |

Lighthouse values are the median of three mobile runs per route. Both MDX documents compile as
Server Components and remain prerendered through `generateStaticParams`.
