# ⭐ Interactive Rating Component

An elegant, responsive **interactive rating app** built with **React** and **styled-components**.
Users can select a rating (1–5), submit it, and see a beautiful **thank-you** message with their chosen rating.

> ⚡ Designed with love, precision, and modern web standards.

---

## 🧠 Features

✅ Clean & modern UI
✅ Responsive for all devices
✅ Dynamic feedback system (using React state)
✅ Styled-components for modular, scalable styling
✅ Smooth transition between pages
✅ Alert if no rating is selected

---

## 🛠️ Built With

- ⚛️ **React** – UI library for building dynamic interfaces
- **styled-components** – for scoped, beautiful CSS-in-JS styling
- **Vite / Create React App** – for a fast development experience
- 🖼️ SVG assets – for crisp visuals on any display

---

---

## ⚙️ How It Works

### 🧩 1. Rating Page

- The user chooses a rating (1 to 5).
- The selected rating updates the state dynamically.
- If the user clicks **Submit** without selecting a rating, an alert appears.

### 💬 2. Thank You Page

- Displays the selected rating dynamically:

  > _"You selected X out of 5"_

- Shows a clean thank-you message.

---

## 🖥️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/LEVANIKAPANADZE/interactive-rating.git
cd interactive-rating
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Now open **[http://localhost:5173](http://localhost:5173)** (or whichever port is shown) 🚀

---

## 🌟 Example Usage

```jsx
import First from "./assets/components/first-page/first";
import GlobalStyle from "../GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <First />
    </>
  );
}

export default App;
```

---

## 🧑‍🎨 UI Design

🟠 Orange (Accent): `#fc7614`
⚫ Dark Blue Backgrounds: `#181e27`, `#232a34`, `#262e38`
⚪ White Text: `#ffffff`
🩶 Neutral Gray Text: `#7c8798`, `#969fad`

All styles are responsive and scalable — using `styled-components` with media queries for desktop screens.

---

## 💡 Lessons Learned

- Learned how to handle **conditional rendering** in React.
- Mastered **state management** with `useState`.
- Practiced **reusable components** and **responsive UI**.
- Gained experience with **styled-components** theming.

---

## 🧑‍💻 Author

**👤 Levani Kapanadze**
💼 Front-End Developer | 💻 React & Next.js Enthusiast
📍 Georgia
📧 [kapanadzelevani522@gmail.com]

> “Build. Break. Learn. Repeat.” — Levani

---

## ❤️ Support

If you like this project:

- ⭐ Star the repo
- 🪄 Fork it & build your own version
- 💬 Share your thoughts

> “Perfection is achieved not when there is nothing more to add,
> but when there is nothing left to take away.” — Antoine de Saint-Exupéry
