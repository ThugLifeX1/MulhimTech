# MulhimTech — ملهم تك

موقع الشركة الرسمي لـ **ملهم تك**، شركة تقنية سعودية متخصصة في تطوير المواقع والتطبيقات وحلول الأعمال الرقمية.

---

## هيكل المشروع

```
MulhimTech/
├── index.html        # الصفحة الرئيسية
├── style.css         # التنسيقات
├── script.js         # التفاعلية
├── CONTRIBUTING.md   # دليل المساهمة وأفضل ممارسات Git
└── README.md         # هذا الملف
```

---

## الإعداد المحلي

```bash
# استنساخ المستودع
git clone git@github.com:ThugLifeX1/MulhimTech.git
cd MulhimTech

# افتح الملف مباشرة في المتصفح
open index.html
# أو استخدم خادم محلي
npx serve .
```

---

## إعداد مفتاح SSH للنشر

### 1. توليد مفتاح SSH

```bash
ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/mulhimtech_deploy
```

### 2. إضافة المفتاح العام إلى GitHub

```bash
# انسخ المفتاح العام
cat ~/.ssh/mulhimtech_deploy.pub
```

ثم أضفه في: **GitHub → Settings → SSH and GPG keys → New SSH key**

### 3. إعداد SSH config

أضف التالي إلى `~/.ssh/config`:

```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/mulhimtech_deploy
    AddKeysToAgent yes
```

### 4. تحديث رابط المستودع إلى SSH

```bash
git remote set-url origin git@github.com:ThugLifeX1/MulhimTech.git
```

### 5. التحقق من الاتصال

```bash
ssh -T git@github.com
# Hi ThugLifeX1! You've successfully authenticated...
```

---

## سير عمل Git

```bash
# إنشاء فرع جديد
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# العمل والحفظ
git add .
git commit -m "feat: وصف التغيير"

# رفع الفرع وفتح PR
git push origin feature/your-feature-name
# افتح Pull Request على GitHub
```

راجع [CONTRIBUTING.md](./CONTRIBUTING.md) للتفاصيل الكاملة.

---

## الفروع

| الفرع | الغرض |
|-------|--------|
| `main` | الكود الإنتاجي — محمي |
| `feature/initial-website-design` | التصميم الأولي للموقع |

---

## التقنيات المستخدمة

- HTML5 / CSS3 (RTL support)
- Vanilla JavaScript
- GitHub Pages (للنشر)

---

## المساهمة

راجع [CONTRIBUTING.md](./CONTRIBUTING.md) لأفضل ممارسات Git والمعايير المتفق عليها في الفريق.
