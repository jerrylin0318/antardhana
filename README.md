# Antardhana Holdings Corp. Website

這是 Antardhana Holdings Corp. 的公司形象網站，使用 Python Flask 框架開發。

## 功能特點

- 響應式設計
- 公司簡介
- 服務介紹
- 聯繫表單
- Google Maps 位置顯示

## 安裝說明

1. 確保你已安裝 Python 3.7 或更高版本

2. 克隆此專案：
```bash
git clone [repository-url]
cd [project-directory]
```

3. 安裝依賴包：
```bash
pip install -r requirements.txt
```

4. 運行應用：
```bash
python app.py
```

5. 在瀏覽器中訪問：
```
http://localhost:5000
```

## 配置 Google Maps

要使用地圖功能，你需要：

1. 獲取 Google Maps API 密鑰
2. 在 templates/index.html 中替換 `YOUR_GOOGLE_MAPS_API_KEY` 為你的 API 密鑰

## 目錄結構

```
.
├── app.py              # Flask 應用主文件
├── requirements.txt    # Python 依賴包
├── static/            # 靜態文件
│   ├── css/          # CSS 文件
│   ├── js/           # JavaScript 文件
│   └── images/       # 圖片文件
└── templates/         # HTML 模板
    └── index.html    # 主頁模板
```

## 技術棧

- Python Flask
- Bootstrap 5
- Google Maps API
- HTML5/CSS3
- JavaScript

## 注意事項

- 請確保更新 `app.secret_key` 為一個安全的密鑰
- 在生產環境中部署時，請關閉 debug 模式
- 建議使用虛擬環境運行此專案 