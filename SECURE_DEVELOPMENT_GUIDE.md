# Secure App Development Blueprint: Web-to-Mobile Architecture

This guide summarizes the development process used for the Cybersecurity Revision Quizzes app. Use this as a blueprint for building hardened, privacy-first Android applications using a local WebView architecture.

---

### 1. Security-First Architecture
The foundation of a secure local app is isolating the execution environment from the device's operating system.

*   **Zero-Permission Model**: Do not request any permissions in `AndroidManifest.xml` unless absolutely essential. An app with no network, storage, or location access is inherently immune to 99% of mobile malware behaviors.
*   **Virtual HTTPS (WebViewAssetLoader)**: Never load local files via `file://` (which is vulnerable to Same-Origin Policy bypasses). Use `WebViewAssetLoader` to map local assets to a virtual domain like `https://appassets.androidplatform.net`.
*   **Strict Content-Security-Policy (CSP)**: Implement a restrictive CSP in every HTML file:
    ```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:;">
    ```
    This forces a total separation of concerns: **Zero inline scripts or styles** are allowed. All logic must reside in external `.js` files.

### 2. Core Logic & Data Isolation
Maintain a clean separation between the "Engine" and the "Content" to ensure maintainability and security auditing.

*   **Logic Engine**: A centralized `quiz.js` handles the state machine (randomization, scoring, navigation).
*   **Data Pools**: Isolate content into standalone `.js` files that define a global constant (e.g., `MASTER_POOL`). This prevents the engine from needing to "fetch" data, maintaining the offline-only nature.
*   **Sanitized Rendering**: Always use `element.innerText` or `document.createTextNode` when displaying data. Never use `.innerHTML` for user-supplied or external data strings to prevent XSS injection.

### 3. Android Native Integration
Even local web apps need a bridge to the native Android OS for a seamless UX.

*   **Native Dialogs**: Use `WebChromeClient` in your `MainActivity.java` to intercept JavaScript `alert()` and `confirm()` calls and map them to native Android `AlertDialog` boxes. This ensures navigation prompts look and behave like a native app.
*   **Hardened WebView Settings**:
    ```java
    webSettings.setAllowFileAccess(false);
    webSettings.setAllowContentAccess(false);
    webSettings.setGeolocationEnabled(false);
    ```

### 4. Build & Hardening Process
Protect the source code and minimize the final binary size.

*   **Obfuscation (R8/ProGuard)**: Enable `minifyEnabled true` and `shrinkResources true` in `build.gradle`. This renames classes and variables to nonsense names, making reverse-engineering significantly harder.
*   **Signing Workflows**:
    *   **Debug**: Use `assembleDebug` for emulators (Waydroid).
    *   **Release**: Use `assembleRelease` + `apksigner` with a local `.jks` key for physical devices.
*   **Semantic Versioning**: Use `versionCode` (integer) and `versionName` (e.g., `1.0.0`) to track releases properly.

### 5. FOSS Distribution (F-Droid Readiness)
To ensure an app can be published on privacy-focused stores like F-Droid:

*   **The "No Blobs" Rule**: Your repository must contain **zero** pre-compiled binaries (`.apk`, `.jar`, `.bin`). Use a `.gitignore` to enforce this.
*   **Gradle Wrapper**: Always include the `gradlew` wrapper. It ensures the app can be built in a clean, isolated environment without pre-installed tools.
*   **Standardized Metadata**: Use the **Fastlane** structure (`fastlane/metadata/android/en-US/`) at the repository root for descriptions and icons.
*   **License**: Include a clear OSI-approved license (e.g., MIT or Apache 2.0) from day one.

---

### Quickstart Checklist for New Apps
1.  [ ] **Initialize**: Create a folder structure with `assets/`, `css/`, `js/`, and `data/`.
2.  [ ] **Harden**: Add the strict CSP to your `index.html`.
3.  [ ] **Native Bridge**: Scaffold a `MainActivity.java` with `WebViewAssetLoader`.
4.  [ ] **Wrapper**: Run `gradle wrapper` to enable reproducible builds.
5.  [ ] **Metadata**: Set up the `fastlane/` folder for store listings.
6.  [ ] **Clean**: Verify `.gitignore` is blocking all `.jks` and `.apk` files.
