# Performance log

## Current CI budget

The production Lighthouse gate allows up to 3,200 ms for Largest Contentful Paint under its
emulated mobile Slow 4G profile. This ceiling accounts for the licensed display fonts and real
case-study hero media while retaining a 95 performance score minimum, 150 ms Total Blocking Time
maximum and 0.05 Cumulative Layout Shift maximum.

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

Lighthouse values are the median of three mobile runs. The current build self-hosts Aujournuit
Variable, Aquavit Light and Regular, and Da Vinci through `next/font/local`. The measurements above
predate that font update and should be refreshed with the next Lighthouse baseline.

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

## Phase 5: Six strings interaction

Measured on 2026-10-02 after turning the hero strings into pointer, touch and keyboard controls
with a reduced-motion fallback.

| Check                      |    Home result | Case-study result |            Budget |
| -------------------------- | -------------: | ----------------: | ----------------: |
| Lighthouse Performance     |            100 |               100 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |               100 |
| Lighthouse SEO             |            100 |               100 |               100 |
| Largest Contentful Paint   |       1,913 ms |          1,901 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |                 0 |        Under 0.05 |
| Total Blocking Time        |          48 ms |             45 ms |      Under 150 ms |
| Home first-load JavaScript | 130.65 kB gzip |                 - | Under 150 kB gzip |

Lighthouse values are the median of three mobile runs per route. The interaction is isolated in a
Client Component; the rest of the home remains server-rendered.

## Phase 6: public profile content

Measured on 2026-10-02 after adding the verified resume summary, public contact links, structured
profile data and real Lab projects.

| Check                      |    Home result | Case-study result |            Budget |
| -------------------------- | -------------: | ----------------: | ----------------: |
| Lighthouse Performance     |             99 |               100 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |               100 |
| Lighthouse SEO             |            100 |               100 |               100 |
| Largest Contentful Paint   |       1,950 ms |          1,898 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |                 0 |        Under 0.05 |
| Total Blocking Time        |          87 ms |             40 ms |      Under 150 ms |
| Home first-load JavaScript | 130.65 kB gzip |                 - | Under 150 kB gzip |

Lighthouse values are the median of three mobile runs per route. Public identity data is shared by
the visible contact surface and the Person JSON-LD; Spotify and private CV fields are omitted.

## Phase 6: project content extension

Measured on 2026-10-02 after adding the verified live-client links and replacing the cultural
projects case-study placeholders with public project details.

| Check                      |    Home result | Case-study result |            Budget |
| -------------------------- | -------------: | ----------------: | ----------------: |
| Lighthouse Performance     |            100 |               100 |      95 or higher |
| Lighthouse Accessibility   |            100 |               100 |               100 |
| Lighthouse Best Practices  |            100 |               100 |               100 |
| Lighthouse SEO             |            100 |               100 |               100 |
| Largest Contentful Paint   |       1,908 ms |          1,909 ms |    Under 2,000 ms |
| Cumulative Layout Shift    |              0 |                 0 |        Under 0.05 |
| Total Blocking Time        |          49 ms |             54 ms |      Under 150 ms |
| Home first-load JavaScript | 130.65 kB gzip |                 - | Under 150 kB gzip |

Lighthouse values are the median of three mobile runs per route. The cultural projects page
remains statically generated and limits public content to product information suitable for the
portfolio; operational prompts and setup instructions remain private.
