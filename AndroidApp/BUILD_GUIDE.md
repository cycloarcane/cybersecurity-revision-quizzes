# Android Build & Security Guide

This document outlines the steps to build, sign, and harden the **Cybersecurity Revision Quizzes** Android application.

## 1. Prerequisites

- **Java JDK**: Version 17 or higher (recommended for Gradle 8.9+).
- **Android SDK**: Build-Tools version 35.0.0.
- **Gradle**: Version 9.3 (or use the provided Gradle wrapper if available).

## 2. Project Architecture

The app uses a **Hardened WebView** architecture:
- **No Permissions**: `AndroidManifest.xml` requests zero Android permissions.
- **Virtual HTTPS**: Assets are loaded via `https://appassets.androidplatform.net/assets/` using `WebViewAssetLoader`.
- **Strict CSP**: A Content-Security-Policy blocks all inline scripts and styles.
- **Local Isolation**: All logic is executed locally from the `assets/` directory.

## 3. Building the APK

To generate an unsigned release APK, run the following command from the `AndroidApp/` directory:

```bash
gradle assembleRelease
```

The output will be located at:
`app/build/outputs/apk/release/app-release-unsigned.apk`

## 4. Signing the APK

You must sign the APK with a release key before it can be installed on a device.

### Step 4.1: Generate a Key (If you haven't already)
```bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
```

### Step 4.2: Sign the APK
Use the `apksigner` tool from your Android SDK build-tools directory:

```bash
/path/to/sdk/build-tools/35.0.0/apksigner sign 
    --ks release-key.jks 
    --ks-pass pass:YOUR_PASSWORD 
    --out app/build/outputs/apk/release/cyberquizzes-final.apk 
    app/build/outputs/apk/release/app-release-unsigned.apk
```

## 5. Verification

To verify that the APK is correctly signed and aligned:

```bash
/path/to/sdk/build-tools/35.0.0/apksigner verify --verbose app/build/outputs/apk/release/cyberquizzes-final.apk
```

## 6. Security Maintenance

- **Adding New Quizzes**:
  1. Add the question data to `assets/data/your-quiz.js`.
  2. Create a wrapper HTML file in `assets/` (copy `owasp-top10-2025.html` as a template).
  3. Add a link to the new quiz in `assets/index.html`.
- **Obfuscation**: R8 is enabled by default in `app/build.gradle` (`minifyEnabled true`). Do not disable this for release builds as it protects the source code from reverse engineering.
- **Secrets**: NEVER commit `release-key.jks` or your keystore password to version control. They are already added to `.gitignore`.
