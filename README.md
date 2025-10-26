# Arabic to Sign Language Translator

This project is an **interactive web application** that translates **Arabic text into sign language** using visual symbols.  
It aims to **bridge communication gaps** and make interaction more accessible for the **hearing-impaired community**.

---

## Live Demo

You can view the live version of the project here:  
[Live Demo Link](https://shorookkhaled559.github.io/Translate-Arabic-text-to-sign-language/)

---

## Features

- **Arabic Text Input** — Supports Arabic characters for translation.  
- **Instant Translation** — Converts each letter into its corresponding sign language image.  
- **Clean & Accessible Interface** — Simple layout with clear sections and responsive design.  
- **RTL Support** — Full right-to-left alignment for Arabic text and output.  
- **Educational Purpose** — Helps learners understand Arabic sign language visually.  
- **Customizable Image Set** — Add or modify hand sign images easily.  
- **Responsive Design** — Works smoothly across desktop, tablet, and mobile devices.

---

## Technologies Used

- **HTML5** — Page structure and content.  
- **CSS3** — Styling, layout, and responsiveness.  
- **JavaScript (ES6)** — Handles translation logic and DOM manipulation.  

---

## Project Structure

```
Arabic-Sign-Translator/
│
├── img/
│   ├── ا.png
│   ├── ب.png
│   ├── ت.png
│   └── ... (other Arabic letters)
│
├── css/style.css
├── js/index.js
└── index.html
```

---

## How It Works

1. The user enters Arabic text in the **textarea**.  
2. When the user clicks **"Translate"**, JavaScript processes each character.  
3. For each valid Arabic letter, an image is displayed from the folder `img/`.  
4. The images appear in the same order as the entered text, visually representing the sign language translation.

---

## Getting Started

1. **Clone or download** this repository.  
2. Create a folder named `img/` and add sign images named with Arabic letters (e.g., `ا.png`, `ب.png`, `ت.png`).  
3. Open `index.html` in your browser.  
4. Type Arabic text and click **Translate** to see the result.  

---

## Folder Details

| File / Folder | Description |
|----------------|--------------|
| `index.html` | The main structure of the website |
| `css/style.css` | Contains all styles and visual design |
| `js/script.js` | Controls translation and interactivity |
| `img/` | Stores the sign images for each Arabic letter |

---

## Future Improvements

- Add **voice-to-text translation** for easier input.  
- Support **common Arabic words**, not just letters.  
- Include **animation effects** for a smoother translation experience.  
- Add a **dark mode** option.  

---

## License

This project is **open-source** and free to use, modify, or share for educational and non-commercial purposes.  
Developed with  by **Shorouk Khaled**.
