# Antardhana Holdings Corp. Website

這是 Antardhana Holdings Corp. 的公司形象網站，使用 HTML、CSS 和 JavaScript 開發的靜態網站。

## 功能特點

- 響應式設計
- 中英文雙語支持
- Google Maps 整合
- 聯繫表單
- 現代化 UI/UX

## 目錄結構

```
.
├── index.html          # 中文版首頁
├── en/                 # 英文版目錄
│   └── index.html     # 英文版首頁
├── css/               # CSS 文件
│   └── styles.css     # 主要樣式文件
└── js/                # JavaScript 文件
    └── script.js      # 主要腳本文件
```

## 部署到 GitHub Pages

1. 創建新的 GitHub 倉庫
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

2. 在 GitHub 倉庫設置中啟用 GitHub Pages：
   - 進入倉庫設置
   - 找到 "Pages" 部分
   - 在 "Source" 下選擇 "main" 分支
   - 點擊 "Save"

3. 等待幾分鐘後，你的網站將在以下地址可用：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 本地開發

要在本地預覽網站，你可以使用任何靜態文件服務器，例如：

```bash
# 使用 Python 的簡單 HTTP 服務器
python -m http.server 8000
```

然後在瀏覽器中訪問：`http://localhost:8000`

## 自定義

1. Google Maps API
   - 在 Google Cloud Console 獲取 API 密鑰
   - 在 HTML 文件中替換 `YOUR_GOOGLE_MAPS_API_KEY`

2. 聯繫表單
   - 目前表單提交只會顯示成功消息
   - 要啟用實際的表單提交功能，你需要：
     - 設置郵件服務
     - 或使用第三方表單服務（如 Formspree）

## 注意事項

- 請確保更新 Google Maps API 密鑰
- 在生產環境中部署時，建議使用 CDN 來提供靜態資源
- 考慮添加 SSL 證書以啟用 HTTPS 