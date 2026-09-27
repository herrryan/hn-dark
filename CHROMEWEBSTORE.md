# Chrome Web Store Listing — Hacker News Dark Mode

> Last Updated: 2026-09-27

## Store Listing

**Extension Name** [REQUIRED]
Hacker News Dark Mode

**Short Description** [REQUIRED]
Apple-inspired dark mode theme for Hacker News (news.ycombinator.com) with SF Pro typography and zero flash of unstyled content.

**Detailed Description** [REQUIRED]
A modern, lightweight dark mode extension crafted specifically for Hacker News (news.ycombinator.com), inspired by Apple website aesthetics, colors, and SF Pro typography.

Tired of the harsh white glare while reading late-night tech discussions? Hacker News Dark Mode delivers a refined, eye-friendly reading experience with zero white flash on page load (0 FOUC).

KEY FEATURES:
- Apple Website Color Palette: Apple Dark (default sleek surface #000000 / #161617 / #1d1d1f), Charcoal Zinc, OLED Pure Black, Nord Arctic Slate, and Warm Espresso Coffee.
- Apple SF Pro & SF Mono Typography: Native Apple font stack ("SF Pro Text", "SF Pro Display", "SF Mono") with antialiasing and optical kerning, plus classic Verdana toggle.
- 6 Apple System Accents: Apple Blue (#2997ff), Apple Orange (#ff9f0a), Apple Cyan (#64d2ff), Apple Green (#30d158), Apple Purple (#bf5af2), and Apple Silver (#f5f5f7).
- Apple Translucent Header: Frosted-glass navigation bar with backdrop blur and hairline separator.
- Comment Thread Indentation Guides: Clean vertical guide lines down nested comment trees make long, complex discussions effortless to follow.
- Dim Visited Stories: Visited articles are subtly dimmed so you immediately know which threads you have already explored.
- Comfortable Reading Width: Centered reading column on widescreen monitors with rounded corners, or classic full width.
- Instant Keyboard Toggle: Press ⌥+⇧+D on Mac (or Alt+Shift+D on Windows/Linux) anywhere on Hacker News to toggle dark mode instantly.
- Zero Flash of Unstyled Content (Zero-FOUC): CSS is injected before DOM paint begins, guaranteeing an immediate dark canvas every time.
- Private & Lightweight: No tracking, no ads, no external server requests, and zero analytics.

HOW TO USE:
1. Install the extension.
2. Visit https://news.ycombinator.com — dark mode activates automatically.
3. Click the extension icon in your Chrome toolbar to customize palettes, accents, thread lines, and layout preferences.
4. Press Option+Shift+D (Alt+Shift+D) to toggle on or off anytime.

PRIVACY & PERMISSIONS:
This extension respects your privacy completely. It operates strictly locally on news.ycombinator.com and does not collect, transmit, or store any personal data or browsing history.

SUPPORT & SOURCE CODE:
Found a bug or have a suggestion? Open an issue on our GitHub repository.

**Category** [REQUIRED]
Productivity

**Single Purpose** [REQUIRED]
Applies an Apple-inspired dark mode theme to Hacker News (news.ycombinator.com) to improve readability and visual comfort.

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
- Screenshot 1: Hacker News front page in Apple Dark Mode with Apple Blue accent and comfortable reading width.
- Screenshot 2: Deep comment thread showing SF Pro typography, vertical indentation guide lines, and SF Mono code blocks.
- Screenshot 3: The extension popup open, showcasing the Apple-styled interface with palette choices, live Apple system accents, and iOS switches.

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
| 1.0.0 | 2026-09-27 | Initial release: Apple website dark palette, SF Pro / SF Mono typography, Apple system accents, zero-FOUC architecture, popup UI, shortcut support. | Draft |

## Review Notes

### Known Issues / Limitations
None. Pure client-side styling that doesn't modify Hacker News functionality or account mechanics.
