# Chrome Web Store Listing — Hacker News Dark Mode

> Last Updated: 2026-09-27

## Store Listing

**Extension Name** [REQUIRED]
Hacker News Dark Mode

**Short Description** [REQUIRED]
Clean, customizable dark mode theme for Hacker News (news.ycombinator.com) with zero flash of unstyled content.

**Detailed Description** [REQUIRED]
A modern, lightweight dark mode theme crafted specifically for Hacker News (news.ycombinator.com).

Tired of the bright white glare while reading late-night tech discussions? Hacker News Dark Mode delivers a high-contrast, eye-friendly reading experience with zero white flash on page load (0 FOUC).

KEY FEATURES:
- 4 Curated Dark Themes: Charcoal (default sleek zinc), OLED Pure Black, Nord Arctic Slate, and Warm Espresso Coffee.
- 5 Accent Highlights: Classic HN Orange, Electric Sky Cyan, Emerald Tech Green, Neon Violet, and Minimal Monochrome.
- Comment Thread Indentation Guides: Clean vertical guide lines down nested comment trees make long, complex discussions effortless to follow.
- Dim Visited Stories: Visited articles are subtly dimmed so you immediately know which threads you have already explored.
- Modern or Classic Typography: Choose between modern system sans-serif and classic Hacker News Verdana.
- Comfortable Reading Width: Centered reading column on widescreen monitors with an option to toggle back to classic full width.
- Instant Keyboard Toggle: Press Alt+Shift+D (Option+Shift+D on Mac) anywhere on Hacker News to toggle dark mode instantly.
- Zero Flash of Unstyled Content (Zero-FOUC): CSS is injected before DOM paint begins, guaranteeing an immediate dark canvas every time.
- Private & Lightweight: No tracking, no ads, no external server requests, and zero analytics.

HOW TO USE:
1. Install the extension.
2. Visit https://news.ycombinator.com — dark mode activates automatically.
3. Click the extension icon in your Chrome toolbar to customize palettes, accents, thread lines, and layout preferences.
4. Press Alt+Shift+D (Mac: Option+Shift+D) to toggle on or off anytime.

PRIVACY & PERMISSIONS:
This extension respects your privacy completely. It operates strictly locally on news.ycombinator.com and does not collect, transmit, or store any personal data or browsing history.

SUPPORT & SOURCE CODE:
Found a bug or have a suggestion? Open an issue on our GitHub repository.

**Category** [REQUIRED]
Productivity

**Single Purpose** [REQUIRED]
Applies a customizable dark mode theme to Hacker News (news.ycombinator.com) to improve readability in low-light environments.

**Primary Language** [REQUIRED]
English

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon [REQUIRED] | 128×128 PNG | ✅ Ready | `icons/icon-128.png` |
| Screenshot 1 [REQUIRED] | 1280×800 or 640×400 | ⬜ Ready to capture | |
| Screenshot 2 [RECOMMENDED] | 1280×800 or 640×400 | ⬜ Ready to capture | |
| Screenshot 3 [RECOMMENDED] | 1280×800 or 640×400 | ⬜ Ready to capture | |
| Small Promo Tile [RECOMMENDED] | 440×280 | ⬜ Ready to capture | |
| Marquee Promo Tile | 1400×560 | ⬜ Ready to capture | |

### Screenshot Notes
- Screenshot 1: Hacker News front page in Charcoal Dark Mode with classic orange accent and comfortable width.
- Screenshot 2: Deep comment thread showing the vertical indentation guide lines and code snippet formatting.
- Screenshot 3: The extension popup open, showcasing the palette picker (OLED, Nord, Warm Coffee) and live accent switches.

## Permissions Justification

| Permission | Type | Justification |
|------------|------|---------------|
| `storage` | permissions | Used to save user preferences locally across sessions (active theme, accent color, typography mode, comment guides, and layout width). |
| `https://news.ycombinator.com/*` | host_permissions | Required to inject the dark mode stylesheet and apply real-time theme customization exclusively on Hacker News web pages. |

## Privacy & Data Use

### Data Collection

**Does the extension collect user data?** No

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

## Privacy Policy

**Privacy Policy URL**
https://github.com/hacker-news-dark-mode/privacy-policy

## Distribution

**Visibility**: Public
**Regions**: All regions
**Pricing**: Free

## Developer Info

**Publisher Name** [REQUIRED]
Hacker News Dark Mode Team

**Contact Email** [REQUIRED]
support@example.com

**Homepage URL** [RECOMMENDED]
https://news.ycombinator.com

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0 | 2026-09-27 | Initial release: 4 themes, 5 accents, thread guide lines, zero-FOUC architecture, popup UI, shortcut support. | Draft |

## Review Notes

### Known Issues / Limitations
None. Pure client-side styling that doesn't modify Hacker News functionality or account mechanics.
