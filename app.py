from flask import Flask, render_template, request, flash, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

# 語言內容
CONTENT = {
    'zh': {
        'nav': {
            'home': '首頁',
            'about': '關於我們',
            'services': '服務項目',
            'contact': '聯絡我們'
        },
        'content': {
            'hero_title': '歡迎來到 Antardhana Holdings Corp.',
            'hero_subtitle': '您值得信賴的房地產投資夥伴',
            'about_title': '關於我們',
            'about_text': 'Antardhana Holdings Corp. 是一家專業的房地產控股公司，致力於管理和開發優質房地產資產。通過我們的策略方針和市場專業知識，我們為持份者創造價值。',
            'services_title': '服務項目',
            'service_1_title': '物業管理',
            'service_1_text': '專業的住宅和商業物業管理服務',
            'service_2_title': '資產開發',
            'service_2_text': '策略性的物業資產開發與提升',
            'service_3_title': '投資方案',
            'service_3_text': '全方位的房地產投資策略與解決方案',
            'contact_title': '聯絡我們',
            'location_title': '我們的位置',
            'contact_form_title': '與我們聯繫',
            'name_placeholder': '您的姓名',
            'email_placeholder': '您的電子郵件',
            'message_placeholder': '您的訊息',
            'submit_button': '發送訊息',
            'footer_text': '© 2024 Antardhana Holdings Corp. 版權所有。'
        }
    },
    'en': {
        'nav': {
            'home': 'Home',
            'about': 'About',
            'services': 'Services',
            'contact': 'Contact'
        },
        'content': {
            'hero_title': 'Welcome to Antardhana Holdings Corp.',
            'hero_subtitle': 'Your Trusted Partner in Property Investment',
            'about_title': 'About Us',
            'about_text': 'Antardhana Holdings Corp. is a premier property holding company dedicated to managing and developing premium real estate assets. With our strategic approach and market expertise, we create value for our stakeholders through careful property selection and management.',
            'services_title': 'Our Services',
            'service_1_title': 'Property Management',
            'service_1_text': 'Professional management of residential and commercial properties.',
            'service_2_title': 'Asset Development',
            'service_2_text': 'Strategic development and enhancement of property assets.',
            'service_3_title': 'Investment Solutions',
            'service_3_text': 'Comprehensive property investment strategies and solutions.',
            'contact_title': 'Contact Us',
            'location_title': 'Our Location',
            'contact_form_title': 'Get in Touch',
            'name_placeholder': 'Your Name',
            'email_placeholder': 'Your Email',
            'message_placeholder': 'Your Message',
            'submit_button': 'Send Message',
            'footer_text': '© 2024 Antardhana Holdings Corp. All rights reserved.'
        }
    }
}

@app.route('/', methods=['GET', 'POST'])
def home():
    # 獲取語言設置，默認為中文
    lang = request.args.get('lang', 'zh')
    if lang not in CONTENT:
        lang = 'zh'
    
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        # 根據語言顯示不同的成功消息
        success_message = '感謝您的留言！我們會盡快回覆您。' if lang == 'zh' else 'Thank you for your message! We will get back to you soon.'
        flash(success_message, 'success')
        return redirect(url_for('home', lang=lang))
    
    return render_template('index.html',
                         lang=lang,
                         current_lang='中文' if lang == 'zh' else 'English',
                         nav=CONTENT[lang]['nav'],
                         content=CONTENT[lang]['content'])

if __name__ == '__main__':
    app.run(debug=True) 