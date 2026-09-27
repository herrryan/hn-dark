# Hacker News Dark Mode — Chrome Extension (Manifest V3)

A high-performance, customizable dark mode extension for [Hacker News](https://news.ycombinator.com). Built with Manifest V3 and zero-flash-of-unstyled-content (Zero-FOUC) architecture.

![Hacker News Dark Mode Icon](icons/icon-128.png)

## 🚀 Features

- **Zero White Flash (0 FOUC)**: Theme styles inject at `document_start` so the page never flashes white on load or navigation.
- **4 Curated Palettes**:
  - **Charcoal** (Default): Sleek dark zinc, easy on the eyes.
  - **OLED Black**: Pitch black `#000000` for OLED screens and maximum battery life.
  - **Nord Blue**: Frosty slate-blue aesthetic.
  - **Warm Coffee**: Warm espresso tones for relaxed nighttime reading.
- **5 Accent Highlights**: Classic HN Orange, Electric Cyan, Emerald Green, Neon Purple, and Minimal Monochrome.
- **Comment Thread Guides**: Vertical indentation guide lines along nested reply chains so you never lose your place in deep discussions.
- **Dim Visited Stories**: Subtle dimming of visited links so you can distinguish fresh content from read articles.
- **Customizable Layout**:
  - Switch between modern clean sans-serif typography and classic Hacker News Verdana.
  - Choose between comfortable centered reading width (1050px) or full width (85%).
  - Sleek dark header bar or classic Hacker News orange banner.
- **Keyboard Shortcut**: Press `Alt + Shift + D` (or `Option + Shift + D` on macOS) to toggle dark mode on/off on any Hacker News tab.
- **Real-Time Synchronization**: Any setting changed in the popup immediately updates active Hacker News tabs without needing a page refresh.
- **100% Privacy-Focused**: No analytics, no third-party requests, and zero data tracking.

---

## 📦 How to Install (Load Unpacked in Chrome / Brave / Edge / Arc)

1. Open your Chromium browser (Chrome, Brave, Arc, or Edge).
2. Navigate to `chrome://extensions` in the address bar.
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the project folder:
   ```text
   /Users/guofei/workspace/hacker-news-dark-mode
   ```
6. The extension is now installed and active! Visit [news.ycombinator.com](https://news.ycombinator.com) to experience dark mode.

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
│   ├── dark-theme.css         # Complete dark theme styling with variables
│   └── content.js             # Content script executing at document_start
├── background/
│   └── service-worker.js      # Service worker for shortcuts & badge state
├── popup/
│   ├── popup.html             # Extension settings popup UI
│   ├── popup.css              # Modern dark popup styles
│   └── popup.js               # Reactive popup logic & storage sync
├── scripts/
│   └── generate_icons.py      # Standalone icon generator
└── README.md
```

---

## 🎨 Theme Customization

Open the extension popup by clicking the icon in the browser toolbar:
- **Master Switch**: Turns dark mode on or off.
- **Palette**: Charcoal, OLED Black, Nord Blue, Warm Coffee.
- **Accents**: Orange, Cyan, Emerald, Purple, Monochrome.
- **Comment Guides**: Toggle vertical thread guide lines.
- **Dim Visited Stories**: Dim previously viewed links.
- **Modern Typography**: Toggle system sans-serif vs classic Verdana.
- **Comfortable Max-Width**: Centered reading column vs full 85%.
- **Sleek Header**: Toggle dark nav bar vs classic orange banner.

---

## ⌨️ Shortcuts

- `Alt + Shift + D` (Mac: `Option + Shift + D`): Toggle dark mode instantly.
