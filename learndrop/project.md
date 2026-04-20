# LearnDrop — Full Developer Prompt
### A minimal course marketplace with Razorpay-gated Google Drive access

---

## 1. Project Overview

Build a static, single-page website called **LearnDrop** — a clean, minimal course marketplace where users can browse courses, read course details, and purchase access. After a successful Razorpay payment, the buyer is immediately redirected to a private access page that reveals the Google Drive course link and a set of access instructions.

**Tagline:** *"Drop in. Level up."*

No backend. No login. No database. Pure HTML + CSS + JavaScript.

---

## 2. Site Name & Branding

| Item | Value |
|------|-------|
| Site Name | **LearnDrop** |
| Tagline | Drop in. Level up. |
| Favicon | A simple downward arrow or droplet icon (CSS/SVG inline) |
| Color palette | Off-white background `#F8F7F4`, near-black text `#1A1A1A`, accent color `#2563EB` (electric blue) for CTAs |
| Font | `DM Sans` (Google Fonts) for body, `DM Serif Display` for the hero heading |
| Tone | Clean, trustworthy, focused — like a premium course platform for developers |

---

## 3. File Structure

```
learndrop/
├── index.html          ← Landing page (course cards grid)
├── course.html         ← Course detail page (dynamic, driven by URL param)
├── access.html         ← Post-payment access page (dynamic, driven by URL param)
├── style.css           ← Global styles
├── data.js             ← Course data (array of objects)
└── razorpay.js         ← Razorpay integration logic
```

---

## 4. Course Data (`data.js`)

Define a JavaScript array called `COURSES`. Each object has these fields:

```js
const COURSES = [
  {
    id: "webdev-devops",
    name: "Web Dev & DevOps",
    tagline: "From frontend to deployment pipelines",
    icon: "🌐",
    price: 499,          // in INR (set your actual price here)
    driveLink: "https://drive.google.com/drive/folders/1bq4d_iP9pCkmH8W0DG-2lKUlmShcGcFY?usp=sharing",
    highlights: [
      "HTML, CSS, JavaScript fundamentals",
      "React & Node.js",
      "Docker, CI/CD, Nginx",
      "Cloud deployment on AWS/GCP"
    ],
    description: "A comprehensive course covering modern web development from ground zero to production-grade DevOps workflows. Learn to build, containerize, and deploy full-stack applications.",
    requirements: "Basic computer knowledge. No prior coding experience needed.",
    duration: "40+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "web3",
    name: "Web 3",
    tagline: "Blockchain, DeFi & Smart Contracts",
    icon: "⛓️",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1flF7pgYJBse8PW2es3gYvZUn0lgYTMWR?usp=drive_link",
    highlights: [
      "Blockchain fundamentals",
      "Solidity smart contracts",
      "DeFi protocols & NFTs",
      "Ethereum & Polygon ecosystem"
    ],
    description: "Dive deep into decentralized technologies. Learn to write and deploy smart contracts, build dApps, and understand the Web3 ecosystem end-to-end.",
    requirements: "Basic JavaScript knowledge recommended.",
    duration: "30+ hours of content",
    level: "Intermediate"
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    tagline: "Machine Learning & Deep Learning",
    icon: "🤖",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1biyY-RN2SRK5yhyJHyD1OaGTLgdjoK0j?usp=drive_link",
    highlights: [
      "Python for Data Science",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Model deployment with Flask/FastAPI"
    ],
    description: "Learn the mathematics, tools, and techniques behind modern AI and machine learning. Build real-world models using scikit-learn, TensorFlow, and PyTorch.",
    requirements: "Basic Python and math (linear algebra, statistics) recommended.",
    duration: "50+ hours of content",
    level: "Intermediate to Advanced"
  },
  {
    id: "cybersecurity",
    name: "Cyber Security",
    tagline: "Ethical hacking & secure systems",
    icon: "🔐",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/17wThM-fSyzmBAKc20R2Cd_M2WIROMH7c?usp=drive_link",
    highlights: [
      "Networking fundamentals",
      "Penetration testing basics",
      "CTF challenges & tools",
      "Secure coding practices"
    ],
    description: "Understand how attackers think and how to defend against them. Covers networking, ethical hacking, vulnerability assessment, and cybersecurity best practices.",
    requirements: "Basic computer and networking knowledge.",
    duration: "35+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "ds-cp",
    name: "DS / Competitive Programming",
    tagline: "Algorithms, data structures & problem solving",
    icon: "🧠",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/12R4tM7PciRGB43rDaZtOufdIWRF713sS?usp=drive_link",
    highlights: [
      "Arrays, Trees, Graphs, DP",
      "Sorting & searching algorithms",
      "LeetCode/Codeforces patterns",
      "Interview preparation roadmap"
    ],
    description: "Master data structures and algorithms through theory and intensive practice. Perfect for cracking FAANG interviews and competitive programming contests.",
    requirements: "Knowledge of any one programming language (C++/Java/Python).",
    duration: "45+ hours of content",
    level: "Beginner to Advanced"
  },
  {
    id: "flutter",
    name: "Flutter",
    tagline: "Cross-platform mobile development",
    icon: "📱",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1PUT6T3zuxfSeFTiSkWpVcQ7gKj-qrD_g?usp=drive_link",
    highlights: [
      "Dart language fundamentals",
      "Flutter widgets & layouts",
      "State management (Provider/Bloc)",
      "Publishing to Play Store & App Store"
    ],
    description: "Build beautiful, natively compiled applications for iOS, Android, and web from a single codebase using Flutter and Dart.",
    requirements: "Basic programming knowledge. No mobile development experience needed.",
    duration: "35+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "game-dev",
    name: "Game Development",
    tagline: "Build games from scratch",
    icon: "🎮",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1QTqpSMU8czJEQtQb3ocWrP3cF3RzzDFc?usp=sharing",
    highlights: [
      "Unity / Godot fundamentals",
      "2D & 3D game mechanics",
      "Physics, animations & UI",
      "Publishing your first game"
    ],
    description: "Go from zero to publishing your first game. Learn game design principles, physics engines, animations, and how to create engaging player experiences.",
    requirements: "No prior experience needed.",
    duration: "40+ hours of content",
    level: "Beginner"
  },
  {
    id: "ui-ux",
    name: "UI / UX Design",
    tagline: "Design that delights users",
    icon: "🎨",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1jkXRW3_JGQ8dR3cPSmP2z8eJa93RhTv2?usp=drive_link",
    highlights: [
      "Design thinking & UX research",
      "Figma (components, auto-layout, prototypes)",
      "Typography, color, and grid systems",
      "Portfolio-ready case studies"
    ],
    description: "Learn user-centered design from research to high-fidelity prototypes. Master Figma and build a professional design portfolio that gets you hired.",
    requirements: "No design experience needed. A laptop with Figma (free) installed.",
    duration: "30+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    tagline: "Edit like a professional creator",
    icon: "🎬",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1Izeh-uXQ_Fv5LRAB0D3wFeSQ5Nl5_gJr?usp=drive_link",
    highlights: [
      "Premiere Pro / DaVinci Resolve basics",
      "Cuts, transitions, and color grading",
      "Motion graphics & text animations",
      "YouTube & Reels optimization"
    ],
    description: "Turn raw footage into polished, professional videos. Learn the full editing workflow used by YouTube creators, filmmakers, and social media editors.",
    requirements: "A computer capable of running Premiere Pro or DaVinci Resolve (free version).",
    duration: "25+ hours of content",
    level: "Beginner"
  },
  {
    id: "web-development",
    name: "Web Development",
    tagline: "HTML, CSS, JS — the complete path",
    icon: "💻",
    price: 499,
    driveLink: "https://drive.google.com/drive/folders/1Ee0UTlftpuXuCySxe7EdDK3wcSEERdfU?usp=drive_link",
    highlights: [
      "HTML5 & CSS3 mastery",
      "JavaScript (ES6+)",
      "Responsive design & Flexbox/Grid",
      "Introduction to React"
    ],
    description: "A focused, beginner-friendly course covering everything you need to build modern, responsive websites. The perfect starting point for any aspiring developer.",
    requirements: "No experience needed. Just a computer and a browser.",
    duration: "30+ hours of content",
    level: "Beginner"
  }
];
```

---

## 5. Page 1: Landing Page (`index.html`)

### Layout Sections

**A. Navbar**
- Left: `LearnDrop` logo (text-based, bold)
- Right: Tagline text — *"Drop in. Level up."*
- Sticky on scroll, thin bottom border

**B. Hero Section**
- Large heading: `"Learn the skills that actually get you hired."`
- Subheading: `"Curated courses. One-time payment. Lifetime access via Google Drive."`
- No CTA button needed — user scrolls to courses
- Subtle background: off-white with a very light dot-grid pattern (CSS `radial-gradient`)

**C. Course Grid**
- Section heading: `"All Courses"`
- CSS Grid: `repeat(auto-fill, minmax(280px, 1fr))`, gap 24px
- Each **Course Card** contains:
  - Large icon (emoji, 2.5rem)
  - Course name (bold, 18px)
  - Tagline (muted, 14px)
  - Level badge (e.g. "Beginner", "Intermediate") — pill style, light blue background
  - Duration line (small, muted)
  - `"View Course →"` button (outlined, full-width)
- On hover: subtle box-shadow lift, border color darkens
- Clicking the card OR the button navigates to: `course.html?id=COURSE_ID`

**D. Footer**
- Small centered text: `© 2025 LearnDrop. All course content is delivered via Google Drive.`
- No social links needed

---

## 6. Page 2: Course Detail Page (`course.html`)

### Behavior
- On page load, read `?id=` from the URL query string
- Find matching course in `COURSES` array from `data.js`
- Dynamically populate all fields

### Layout

**A. Back link:** `← All Courses` (links back to `index.html`)

**B. Course Header**
- Icon (large, 3rem)
- Course name (large heading, 28px)
- Tagline (muted, 16px)
- Row of badges: Level | Duration

**C. Description block**
- Full `description` text from data

**D. What you'll learn**
- Section heading: `"What's inside"`
- Bulleted list from `highlights` array
- Clean checkmark (✓) prefix, no default bullet

**E. Requirements**
- Section heading: `"Requirements"`
- `requirements` text from data

**F. ⚠️ Access Restriction Notice — IMPORTANT**

Display a clearly styled notice box (yellow/amber border, light amber background) with this message:

> **🔒 Restricted Content — Google Drive Access**
>
> This course is delivered as a private Google Drive folder. The access link is protected and will only be revealed **after payment is confirmed.**
>
> Do not share the link with others. Each purchase is for **personal use only.**

Style: amber left-border accent (4px), light amber background, 14px text, rounded corners.

**G. Price & CTA**

- Display price: `₹499` (large, bold, 28px)
- Subline: `"One-time payment · Instant access"`
- Big blue CTA button: `"Get This Course — ₹499"`
- On click: triggers Razorpay payment modal (see Section 8)

---

## 7. Page 3: Post-Payment Access Page (`access.html`)

### Behavior
- User lands here after Razorpay `handler` callback fires (payment success)
- Read `?id=` from URL to find the correct course
- Show the Drive link and instructions

### Layout

**A. Success banner**
- Green checkmark icon (large, CSS circle)
- Heading: `"Payment Successful! 🎉"`
- Subtext: `"You now have access to [Course Name]."`

**B. Access Instructions box** (blue bordered, light blue bg)

> **How to access your course:**
>
> 1. Click the button below to open your Google Drive folder.
> 2. Sign in with your Google account if prompted.
> 3. You'll find all course videos, notes, and resources inside the folder.
> 4. Bookmark the Drive link — it's your permanent access point.
> 5. Do **not** share this link with others. It is for your personal use only.

**C. Drive Access Button**

- Large, prominent green button: `"Open Course in Google Drive ↗"`
- `href` = the `driveLink` from the matching course object
- Opens in a new tab

**D. Reminder notice**

Small muted text below:
> *Save this page URL or bookmark the Drive link. We recommend adding the Drive folder to your "My Drive" for easy access later.*

**E. Back to Courses link**

Small link: `← Browse more courses`

---

## 8. Razorpay Integration (`razorpay.js`)

### Setup
- Load Razorpay checkout script in `<head>`: `<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`
- Use **Razorpay Standard Checkout** (no server needed for frontend-only flow — use test/live key directly)

### Payment Handler Logic

```js
function launchPayment(course) {
  const options = {
    key: "YOUR_RAZORPAY_KEY_ID",   // Replace with your actual key
    amount: course.price * 100,    // Razorpay takes paise
    currency: "INR",
    name: "LearnDrop",
    description: course.name,
    image: "",                     // Optional: your logo URL
    handler: function (response) {
      // Payment successful — redirect to access page
      window.location.href = `access.html?id=${course.id}&payment_id=${response.razorpay_payment_id}`;
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    notes: {
      course_id: course.id,
      course_name: course.name
    },
    theme: {
      color: "#2563EB"
    },
    modal: {
      ondismiss: function() {
        console.log("Payment cancelled by user");
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
```

> ⚠️ **Important for production:** Razorpay's `handler` fires client-side. For a fully static site, this is acceptable since the Drive links aren't sensitive secrets (they're shared links). If you want stricter control in the future, a lightweight serverless function (Vercel/Netlify) can verify the payment_id before redirecting.

---

## 9. UI Design Rules

| Rule | Value |
|------|-------|
| Background | `#F8F7F4` (warm off-white) |
| Text primary | `#1A1A1A` |
| Text muted | `#6B7280` |
| Accent / CTA | `#2563EB` |
| Success | `#16A34A` |
| Warning / Notice | `#D97706` |
| Border | `#E5E7EB` |
| Border radius | `12px` for cards, `8px` for buttons/badges |
| Max content width | `1100px`, centered |
| Font | `DM Sans` from Google Fonts |
| Card shadow (hover) | `0 4px 20px rgba(0,0,0,0.08)` |
| Button style | Solid blue for primary CTA; outlined for secondary |

### Spacing
- Section padding: `80px 0`
- Card padding: `24px`
- Grid gap: `24px`
- Navbar height: `64px`

---

## 10. Responsiveness

- Navbar: collapses to stacked logo + tagline on mobile
- Course grid: single column on mobile (`< 640px`), 2 columns on tablet, 3+ on desktop
- All pages must be fully readable on a 375px wide screen
- Use `rem` units and `clamp()` for font scaling where possible

---

## 11. SEO & Meta Tags (add to all pages)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="LearnDrop — curated tech courses with one-time payment and lifetime Google Drive access." />
<title>LearnDrop — Drop in. Level up.</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## 12. Do Not Do

- ❌ Do not add a login or registration system
- ❌ Do not use any backend framework (Node, PHP, etc.)
- ❌ Do not use localStorage to "remember" payment (it can be faked)
- ❌ Do not hide Drive links in JavaScript variables visible in DevTools if you want security — for now this is acceptable for a simple static site
- ❌ Do not add unnecessary animations or heavy libraries
- ❌ Do not add social sharing buttons on the access page

---

## 13. Summary of User Flow

```
Landing Page (index.html)
    ↓ Click "View Course"
Course Detail Page (course.html?id=COURSE_ID)
    ↓ Click "Get This Course — ₹499"
Razorpay Payment Modal (overlay)
    ↓ Payment success (handler fires)
Access Page (access.html?id=COURSE_ID&payment_id=PAY_XXXX)
    ↓ Click "Open Course in Google Drive"
Google Drive Folder (opens in new tab)
```

---

*Prompt written for: LearnDrop static website | Stack: HTML + CSS + JS | Payment: Razorpay Standard Checkout | Delivery: Google Drive*