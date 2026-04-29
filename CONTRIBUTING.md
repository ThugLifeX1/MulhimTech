# دليل المساهمة - MulhimTech

هذا الدليل يوضح أفضل ممارسات Git التي يجب على جميع أعضاء فريق التطوير اتباعها.

---

## فروع Git (Branching Strategy)

نتبع نموذج **GitHub Flow** المبسّط:

| الفرع | الغرض |
|-------|--------|
| `main` | الكود الإنتاجي — محمي، لا يُدفع إليه مباشرة |
| `develop` | الدمج المرحلي — قبل الدفع لـ main |
| `feature/<name>` | تطوير ميزة جديدة |
| `fix/<name>` | إصلاح خطأ |
| `hotfix/<name>` | إصلاح عاجل في الإنتاج |
| `docs/<name>` | تحديثات التوثيق فقط |

### تسمية الفروع

```bash
# صحيح ✓
feature/user-authentication
feature/contact-form-validation
fix/mobile-nav-overflow
hotfix/payment-crash
docs/api-endpoints

# خاطئ ✗
myFeature
fix_bug
test
new-branch-2
```

### إنشاء فرع جديد

```bash
# دائماً ابدأ من أحدث نسخة
git checkout main
git pull origin main

# أنشئ الفرع
git checkout -b feature/your-feature-name
```

---

## رسائل الـ Commits

### الصيغة القياسية

```
<نوع>: <وصف موجز باللغة العربية أو الإنجليزية>

[وصف تفصيلي اختياري — لماذا؟ وليس ماذا؟]
```

### أنواع الـ Commits

| النوع | الاستخدام |
|-------|-----------|
| `feat` | إضافة ميزة جديدة |
| `fix` | إصلاح خطأ |
| `docs` | تغييرات في التوثيق فقط |
| `style` | تنسيق الكود (لا يؤثر على المنطق) |
| `refactor` | إعادة هيكلة الكود |
| `perf` | تحسين الأداء |
| `test` | إضافة أو تعديل الاختبارات |
| `chore` | تحديث الأدوات أو الاعتماديات |

### أمثلة

```bash
# صحيح ✓
feat: إضافة صفحة التواصل مع التحقق من البيانات
fix: إصلاح ظهور القائمة على الشاشات الصغيرة
docs: تحديث README بتعليمات التثبيت
style: تنسيق ملف CSS وفق المعايير المتفق عليها
refactor: تقسيم مكوّن Hero إلى مكونات أصغر

# خاطئ ✗
fixed stuff
WIP
update
asdf
تعديل
```

### قواعد ذهبية للـ Commits

1. **كل commit لشيء واحد فقط** — لا تخلط إصلاح خطأ مع ميزة جديدة
2. **الرسالة لا تتجاوز 72 حرف** في السطر الأول
3. **لا تُعلّق على commit فارغ** — إذا لم يكن هناك تغيير حقيقي، لا تُنشئ commit
4. **Commit في حالة ثابتة** — يجب أن يعمل الكود بعد كل commit

---

## Pull Requests

### متى تفتح PR؟

افتح Pull Request عند اكتمال الميزة أو الإصلاح وجهوزيتها للمراجعة.

### خطوات فتح PR

```bash
# 1. تأكد أن فرعك محدّث
git checkout main
git pull origin main
git checkout feature/your-feature
git merge main  # أو: git rebase main

# 2. ادفع الفرع إلى GitHub
git push origin feature/your-feature

# 3. افتح PR من واجهة GitHub
```

### قالب PR

عند فتح Pull Request، اذكر:

```markdown
## ماذا يفعل هذا الـ PR؟
وصف مختصر للتغييرات.

## لماذا؟
السبب والمشكلة التي يحلها.

## كيف تم الاختبار؟
- [ ] اختبار على Chrome / Firefox / Safari
- [ ] اختبار على الجوال
- [ ] لا توجد أخطاء في الـ Console

## لقطات شاشة (إن وُجدت)
```

### قواعد الـ PR

- **PR واحد لكل ميزة** — لا تجمع ميزتين في PR واحد
- **لا تُدمج PR بنفسك** — يجب أن يراجعه شخص آخر من الفريق
- **فرع `main` محمي** — يتطلب موافقة مراجع واحد على الأقل
- **حل تعارضات الكود (conflicts) قبل طلب المراجعة**
- **الردّ على تعليقات المراجعة خلال 24 ساعة**

---

## سير العمل اليومي

```bash
# صباح كل يوم — حدّث فرعك
git checkout main && git pull origin main
git checkout feature/your-feature
git merge main

# أثناء العمل — commit بانتظام
git add <files>
git commit -m "feat: وصف التغيير"

# عند الانتهاء — ادفع وافتح PR
git push origin feature/your-feature
# ثم افتح PR على GitHub
```

---

## قواعد مهمة

- ❌ **لا تُعدّل تاريخ الـ commits المُرسَلة** (`git rebase -f` على فروع مشتركة)
- ❌ **لا تُدفع مباشرة إلى `main`**
- ❌ **لا تُحفظ بيانات حساسة** (كلمات مرور، مفاتيح API) في الكود
- ✅ **راجع الكود قبل الـ commit** — استخدم `git diff` دائماً
- ✅ **أبقِ الـ commits صغيرة ومركّزة**

---

## أدوات مساعدة

```bash
git status          # ما الذي تغيّر؟
git diff            # تفاصيل التغييرات
git log --oneline   # سجل الـ commits
git stash           # احفظ التغييرات مؤقتاً
git stash pop       # استعدها
```
