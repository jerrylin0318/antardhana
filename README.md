# Antardhana Holdings Corp. Website

Static corporate website for Antardhana Holdings Corp., a real estate services company based in Bonifacio Global City (B.G.C.), Philippines.

## Features

- Responsive design (Bootstrap 5)
- Multi-language support: English, 繁體中文, 简体中文, हिंदी, Tagalog
- Modern UI/UX with smooth animations
- SEO optimized with meta descriptions and canonical URLs

## Directory Structure

```
.
├── index.html                  # English homepage
├── about.html                  # About page (EN)
├── contact.html                # Contact page (EN)
├── about-{lang}.html           # About pages (zh-tw, zh-cn, hi, tl)
├── contact-{lang}.html         # Contact pages (zh-tw, zh-cn, hi, tl)
├── zh-tw/index.html            # Traditional Chinese homepage
├── zh-cn/index.html            # Simplified Chinese homepage
├── hi/index.html               # Hindi homepage
├── tl/index.html               # Tagalog homepage
├── services/                   # Service pages (EN)
│   ├── property-management.html
│   ├── property-trading.html
│   ├── land-trading.html
│   └── {lang}/                 # Translated service pages
├── css/styles.css              # Main stylesheet
├── js/script.js                # Main script
└── CNAME                       # Custom domain config
```

## Deployment

This site is deployed via GitHub Pages at [antardhana.com](https://antardhana.com).

### Deploy to GitHub Pages

1. Push to the `main` branch
2. In repository Settings → Pages, select "main" branch as the source
3. The site will be available at the custom domain configured in `CNAME`

### Local Development

```bash
# Preview locally with any static file server
python -m http.server 8000
```

Then visit: `http://localhost:8000`

## Languages

| Language | Code | Homepage |
|----------|------|----------|
| English | en | `/index.html` |
| 繁體中文 | zh-tw | `/zh-tw/index.html` |
| 简体中文 | zh-cn | `/zh-cn/index.html` |
| हिंदी | hi | `/hi/index.html` |
| Tagalog | tl | `/tl/index.html` |
