# How to Add Certificates to Your Portfolio

## ✨ Super Simple Method - Just 2 Steps!

### Step 1: Upload Your Certificate File
Save your certificate PDF with the **EXACT SAME NAME** as the title in the certificates folder.

**Location:**
```
Portfolio/client/public/certificates/
```

**Important:** The filename must match the title exactly!

### Step 2: Add Certificate Info
Edit the file: `Portfolio/server/routes/certifications.js`

Add your certificate to the `staticCertifications` array:

```javascript
{
    title: "Your Certificate Title",  // ← This will be used as filename
    issuer: "Issuing Organization",
    date: "2024"
}
```

**That's it!** The system will automatically create the path as `/certificates/Your Certificate Title.pdf`

---

## 📝 Complete Example

**Scenario:** You have a certificate for "CLOUD Computing" from IIT Kharagpur

### Step 1: Save Your File
Save your PDF as: `CLOUD Computing.pdf`
Copy it to: `Portfolio/client/public/certificates/`

### Step 2: Add to Array
```javascript
const staticCertifications = [
    {
        title: "CLOUD Computing",  // ← Matches filename!
        issuer: "IIT Kharagpur",
        date: "2025"
    },
    // ... other certificates
];
```

### Result
The system automatically creates: `/certificates/CLOUD Computing.pdf`
The "View Certificate" button works perfectly! ✅

---

## 🎯 Key Rule

**The certificate filename MUST match the title exactly:**

✅ **Correct:**
- Title: `"CLOUD Computing"`
- Filename: `CLOUD Computing.pdf`

❌ **Wrong:**
- Title: `"CLOUD Computing"`
- Filename: `cloud-computing.pdf` ← Won't match!

---

## 💡 Best Practices

### Option 1: Use Simple Names (Recommended)
```javascript
{
    title: "Cloud Computing",  // Simple, clean
    issuer: "IIT Kharagpur",
    date: "2025"
}
// Save file as: Cloud Computing.pdf
```

### Option 2: Use Kebab-Case Names
```javascript
{
    title: "cloud-computing",  // URL-friendly
    issuer: "IIT Kharagpur",
    date: "2025"
}
// Save file as: cloud-computing.pdf
```

---

## 📂 Current Folder Structure

```
Portfolio/
├── client/
│   └── public/
│       └── certificates/
│           ├── CLOUD Computing.pdf     ← Your certificate here
│           └── README.md               ← This file
└── server/
    └── routes/
        └── certifications.js           ← Add certificate info here
```

---

## 🔧 Supported File Formats

- **PDF** (Recommended): `.pdf`
- **Images**: `.png`, `.jpg`, `.jpeg`

Just make sure the extension matches in your filename!

---

## 🚀 Quick Reference

| Step | Action | Location |
|------|--------|----------|
| 1 | Save certificate file with title as name | `client/public/certificates/` |
| 2 | Add title, issuer, date to array | `server/routes/certifications.js` |
| 3 | Save & reload | Automatic! |

---

## ❓ Troubleshooting

**Problem:** "View Certificate" button doesn't work

**Solutions:**
1. Check if filename matches title exactly (case-sensitive!)
2. Make sure file is in `/client/public/certificates/` folder
3. Check browser console for 404 errors
4. Verify the file extension is `.pdf`

**Example Issue:**
```javascript
title: "CLOUD Computing"  // In code
```
But file is named: `cloud computing.pdf` ❌ (different case)

Should be: `CLOUD Computing.pdf` ✅

---

## 🎉 Benefits of This System

- ✅ **Super Simple:** Just match filename to title
- ✅ **No Manual Paths:** System generates automatically
- ✅ **Less Errors:** One source of truth (the title)
- ✅ **Easy Maintenance:** Add certificates in seconds

---

## 🔮 Future: MongoDB Integration

Want to manage certificates through a database? You can connect MongoDB and use the Certification model for full CRUD operations via an admin panel!
