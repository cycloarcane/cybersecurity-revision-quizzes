# Cybersecurity Revision Quizzes

This repository contains a set of **interactive cybersecurity revision quizzes** designed to support self‑study, exam preparation, and general knowledge reinforcement.

The project features both a **local web-based version** and a **hardened Android application**, providing a secure and flexible environment for learners.

---

## 📱 Android Application

The repository includes a complete Android Studio project (`/AndroidApp`) that compiles into a hardened, zero-permission mobile application.

### Security Architecture
The Android app is built with a focus on security and privacy:
- **Zero Permissions**: The app requests no Android permissions (no network, no file access, no location).
- **WebView Hardening**: Uses `WebViewAssetLoader` to serve local content via virtual HTTPS (`https://appassets.androidplatform.net/assets/`), preventing common `file://` scheme vulnerabilities.
- **Strict Content-Security-Policy (CSP)**: A robust CSP blocks all inline scripts and styles, mitigating potential XSS risks.
- **Data Isolation**: Quiz datasets are isolated into standalone JS modules, ensuring a clean separation between the logic engine and content.
- **R8 Obfuscation**: Release builds are automatically obfuscated and shrunk to protect source code and minimize the attack surface.
- **Native Navigation**: Integration with Android's `WebChromeClient` allows native confirmation dialogs for a seamless mobile experience.

### Build Instructions
Refer to the [Android Build & Security Guide](AndroidApp/BUILD_GUIDE.md) for detailed instructions on compiling, signing, and verifying the APK.

---

## 🌐 Web Version (Hardened)

The quizzes are also available as a hardened web application for use in desktop browsers. This version uses the exact same secure architecture as the Android app.

### Features
- **CSP Compliant**: Full protection against inline script execution.
- **Unified Engine**: Shared JavaScript logic engine between web and mobile platforms for consistent behavior.
- **Navigation Controls**: Quick-access **Home** (🏠) and **Restart** (🔄) buttons with safety confirmation prompts.
- **Responsive Design**: Optimized for both large desktop screens and mobile browser views.
- **Mobile Optimized**: Full scrolling support and toggleable sidebar drawer for smaller viewports.

### How to Use
1. **Clone the repository**
   ```bash
   git clone https://github.com/cycloarcane/cybersecurity-revision-quizzes.git
   ```
2. **Open locally**
   Navigate to the directory and open `index.html` in your browser.

> **Note**
> While the web version is hardened with a strict Content-Security-Policy, it is still recommended for local use. If deploying to a web server, ensure you configure appropriate server-side security headers.

---

## 📚 Included Quizzes

- **CREST CRT**: Based on Syllabus v2.0 (Core Skills, Networks, Windows/Linux, Web).
- **OWASP Top 10 (2025 & 2021)**: Web Application Security Risks.
- **OWASP MAS**: Mobile Application Security (MASVS categories).
- **Active Directory Pentest**: 12 domains of AD security and enumeration.
- **MITRE ATT&CK**: Enterprise Tactics and Techniques.
- **OWASP Agentic AI**: Top 10 for Agentic Applications (2026).
- **OWASP WSTG v4.2**: Web Security Testing Guide categories.

---

## 🛠 Contributing & Bug Reporting

Contributions are welcome! If you encounter any issues or want to improve the content:

### Reporting Content Issues
If you find any **incorrect question/answer pairs** or factual errors in the quiz data, please **[open a GitHub Issue](https://github.com/cycloarcane/cybersecurity-revision-quizzes/issues)**. Provide the quiz name and the specific question text to help us identify and fix it quickly.

### Code Contributions
- Additional quiz content (JSON format in `assets/data/`).
- Accuracy corrections.
- Improved UI/UX components.

Please fork the repository and submit a pull request with a clear description of your changes.

---

## ✉️ Contact

- **GitHub**: [https://github.com/cycloarcane](https://github.com/cycloarcane)
- **Email**: [cycloarkane@gmail.com](mailto:cycloarkane@gmail.com)
