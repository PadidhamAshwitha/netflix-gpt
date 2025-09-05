<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


# 🎬 Netflix-GPT

Netflix-GPT is a **Netflix-inspired web application** built with **Vite**, **Tailwind CSS**, **Firebase Authentication**, **Redux**, and **TMDB APIs**, **Multiple language support**.  
It offers a modern movie-browsing experience with authentication, AI-powered search, and smooth UI interactions.
Through this project I have gained deep understandings of react core, firebase and efficient use of Redux.
---

## 🚀 Features

- **Authentication**
  - Implemented Sign In / Sign Up with a single form.
  - Firebase Authentication for secure login.
  - Only logged-in users can access the Browse Page.
  - If a loggedin user tries to move to sign in page it redirects to browse page.
  - Logout functionality included.

- **Form Validation**
  - Proper validation for sign-in and sign-up forms.

- **GPT Search Page**
  - Enter a prompt (e.g., *“Horror Indian dramatic movies”*)  
  - Get AI-powered recommendations using GPT + TMDB APIs  

- **Movie Browsing**
  - Background trailer video on the **Browse Page**
  - Horizontal scrolling feature for movie categories:
    - Now Playing
    - Trending
    - Horror
    - (and more…)
- **Multi - Language Support**
- The application available in multiple languages and can be seamlessly change the language.
---

## 🛠️ Technologies Used

-  **Vite** – Fast frontend build tool  
-  **Tailwind CSS** – Styling the application
-  **Firebase Authentication** – Secure user management  
-  **Redux** – Global State management  
-  **GPT Integration** – AI-powered movie recommendations  
-  **TMDB API** – Movie data & listings  
---

## ⚙️ Installation & SetUp

1. To Clone :
<pre>
```
git clone https://github.com/PadidhamAshwitha/netflix-gpt.git
cd foodify
```
</pre>

2. Install the Dependencies:
<pre>
```npm install```
</pre>

3. Run the application:
<pre>
```npm run dev```
</pre>

---

## Live Demo

- You can access the live demo of the project [here.](https://searchmovierecommendationsystem.netlify.app/)

## Contribution

- Feel free to fork the repository, submit issues, and open pull requests for improvements.
Your contributions are always welcome!
