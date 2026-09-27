# Hacker News Dark Mode — Chrome Extension (Manifest V3)

A high-performance, beautifully crafted dark mode extension for [Hacker News](https://news.ycombinator.com), inspired by **Apple website design language, colors, and SF Pro typography**. Built with Manifest V3 and zero-flash-of-unstyled-content (Zero-FOUC) architecture.

![Hacker News Dark Mode Icon](icons/icon-128.png)

## 🚀 Features

- **Apple Website Color Palette**:
  - **Apple Dark (Default)**: Apple's official dark mode web palette (`#000000` true black page, `#161617` container surface, `#1d1d1f` cards, `#f5f5f7` text, `#86868b` subtext, `#6e6e73` muted).
  - **Charcoal Zinc**: Sleek dark zinc aesthetic (`#121214` / `#18181b`).
  - **OLED Pure Black**: Complete `#000000` pitch black for maximum OLED battery savings.
  - **Nord Arctic Slate**: Frosty slate-blue palette (`#1e222a` / `#242933`).
  - **Warm Coffee**: Warm espresso tones for relaxed nighttime reading.
- **Apple SF Pro & SF Mono Typography**:
  - Native Apple font stack: `"SF Pro Text"`, `"SF Pro Display"`, `"SF Pro Icons"`, `-apple-system`, `BlinkMacSystemFont`.
  - Monospace code styling: `"SF Mono"`, `ui-monospace`, `Menlo`.
  - Apple optical kerning, `-webkit-font-smoothing: antialiased`, and subpixel text rendering.
  - Option to toggle back to classic Hacker News Verdana anytime.
- **Apple System Accents**:
  - **Apple Blue** (`#2997ff` - default signature web link & CTA color)
  - **Apple Orange** (`#ff9f0a` - Apple dark mode vibrant orange)
  - **Apple Cyan** (`#64d2ff` - Apple teal/cyan)
  - **Apple Green** (`#30d158` - Apple iOS/macOS mint green)
  - **Apple Purple** (`#bf5af2` - Apple indigo/purple)
  - **Apple Silver / Monochrome** (`#f5f5f7`)
- **Apple Translucent Frosted Glass Header**:
  - Navbar with `backdrop-filter: blur(20px) saturate(180%)` and subtle hairline border separator.
- **Zero White Flash (0 FOUC)**: Theme styles inject at `document_start` so the page never flashes white on load or navigation.
- **Comment Thread Guides**: Delicate vertical guide lines along nested reply chains so you never lose your place in deep discussions.
- **Dim Visited Stories**: Subtle dimming of visited links so you can distinguish fresh content from read articles.
- **Comfortable Reading Width**: Apple-inspired centered reading container (`1050px`) with 12px smooth squircle corners and soft diffused drop shadow.
- **Keyboard Shortcut**: Press `⌥ + ⇧ + D` (Mac) or `Alt + Shift + D` (Windows/Linux) to toggle dark mode instantly on any Hacker News tab.
- **Real-Time Synchronization**: Any setting changed in the popup immediately updates active Hacker News tabs without needing a page refresh.
- **100% Privacy-Focused**: No analytics, no third-party requests, and zero data tracking.

---

## 📦 How to Install (Load Unpacked in Chrome / Brave / Edge / Arc)

1. Open your Chromium browser (Chrome, Brave, Arc, or Edge).
2. Navigate to `chrome://extensions` in the address bar.
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select this project folder (`hacker-news-dark-mode`).
6. The extension is now installed and active! Visit [news.ycombinator.com](https://news.ycombinator.com) to experience Apple dark mode.

---

## 🛠️ File Structure

```text
hacker-news-dark-mode/
├── manifest.json              # Manifest V3 configuration
├── CHROMEWEBSTORE.md          # Chrome Web Store metadata & review docs
├── icons/                     # Pixel-perfect PNG icons
│   ├── icon-16.png            # 16x16 icon
│   ├── icon-48.png            # 48x48 icon
│   └── icon-128.png           # 128x128 icon
├── content/
│   ├── dark-theme.css         # Complete Apple-inspired dark stylesheet with CSS variables
│   └── content.js             # Content script executing at document_start
├── background/
│   └── service-worker.js      # Service worker for shortcuts & badge state
├── popup/
│   ├── popup.html             # Extension settings popup UI
│   ├── popup.css              # Apple HIG dark popup styles & iOS toggles
│   └── popup.js               # Reactive popup logic & storage sync
├── scripts/
│   └── generate_icons.py      # Standalone icon generator
└── README.md
```

---

## 🎨 Theme Customization

Open the extension popup by clicking the icon in the browser toolbar:
- **Master Switch**: Turns dark mode on or off.
- **Palette**: Apple Dark (Official), Charcoal, OLED Black, Nord Blue, Warm Coffee.
- **Accents**: Apple Blue, Apple Orange, Apple Cyan, Apple Green, Apple Purple, Apple Silver.
- **Comment Guides**: Toggle vertical thread guide lines.
- **Dim Visited Stories**: Dim previously viewed links.
- **Apple SF Pro Typography**: Toggle SF Pro / SF Mono vs classic Verdana.
- **Comfortable Max-Width**: Centered reading column vs full 85%.
- **Apple Translucent Header**: Toggle frosted glass dark nav bar vs classic orange banner.

---

## ⌨️ Shortcuts

- `⌥ + ⇧ + D` (Mac) / `Alt + Shift + D` (Windows/Linux): Toggle dark mode instantly.
