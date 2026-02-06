# Cybersecurity Revision Quizzes

This repository contains a set of **interactive cybersecurity revision quizzes** designed to support self‑study, exam preparation, and general knowledge reinforcement across a range of cybersecurity topics.

> **Important**
> All quiz pages in this repository are intended to be run **locally**. They are **not designed, tested, or security‑hardened for remote or public hosting**. Do not deploy these files to an internet‑facing server without a full security review.

---

## Overview

The quizzes in this repository are implemented using simple web technologies (HTML, JavaScript, and CSS) and are designed to be opened directly in a browser without any backend services.

Typical use cases include:

* Personal cybersecurity exam revision
* Offline learning and self‑assessment
* Reinforcing knowledge of protocols, standards, and security concepts
* Lightweight study tools that require no installation or internet access

This project deliberately prioritises clarity and accessibility over production‑grade web security controls.

---

## How to Use

1. **Clone the repository**

   ```bash
   git clone https://github.com/cycloarcane/cybersecurity-revision-quizzes.git
   ```

2. **Open locally**
   Navigate to the repository directory and open the relevant `.html` file directly in your browser. A local web server is not required.

3. **No hosting assumed**
   These pages are intended to be accessed via `file://` or a trusted local environment only.

---

## Local‑Only Security Model

This project **does not assume a hostile environment**. As a result, it intentionally omits protections that would be required for remote deployment, including but not limited to:

* Authentication and authorisation
* Input sanitisation for untrusted users
* Content Security Policy (CSP) headers
* Server‑side validation or logging
* Protection against XSS, CSRF, or injection attacks

If you intend to host this content remotely, you must treat it as **unsafe by default** and implement appropriate security controls.

---

## Contributing

Contributions are welcome, particularly for:

* Additional quiz content
* Accuracy corrections
* Improved usability or accessibility
* Refactoring quiz logic for maintainability

Please fork the repository and submit a pull request with a clear description of your changes.

---

## Contact

For questions, collaboration, or issues:

* **GitHub**: [https://github.com/cycloarcane](https://github.com/cycloarcane)
* **Email**: [cycloarkane@gmail.com](mailto:cycloarkane@gmail.com)