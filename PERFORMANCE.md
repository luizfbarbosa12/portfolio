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
