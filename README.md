# 🎬 Netflix-GPT

- Netflix-GPT is a **Netflix-inspired web application** built with **Vite**, **Tailwind CSS**, **Firebase Authentication**, **Redux**, and **TMDB APIs**, **Multiple language support**.  
- It offers a modern movie-browsing experience with authentication, AI-powered search, and smooth UI interactions.
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
    - popular
    - (and more…)
- **Multi - Language Support**
- The application available in multiple languages and can be seamlessly change the language.

- **Responsive**
- Made application to be responsive for mobile and desktop using tailwind css

- **Memoization**
- Handled the fetch calls wisely using memoization. So that data fetches only once and stores in Redux.

- **Display Movie**
- On click of the movie card it plays the movie 
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
cd netflix-gpt
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
## 📂 Folder Structure

```bash
src/
├── App.jsx
├── components/
├── Body.jsx                  # Provided routing for login, browse, and error pages
├── Browse.jsx                # Contains Main and secondary container
├── DisplayMovie.jsx          # On click of movieCard plays movie
├── ErrorPage.jsx             # Displays error
├── Footer.jsx                # Contains footer info for contact
├── GptMovieSuggestions.jsx   # Movies suggested according to prompt
├── GptSearchBar.jsx          # SearchBar to give the prompt
├── GptSearchPage.jsx         # Contains searchbar and suggestions
├── Header.jsx                # Navigation elements (sign out, GPT search)
├── Login.jsx                 # Firebase authentication
├── MainContainer.jsx         # VideoTitle and VideoBackground components
├── MovieCard.jsx
├── MovieList.jsx             # Displays list of movies by genre
├── SecondaryContainer.jsx    # Contains moviecards & lists
├── VideoBackground.jsx
├── VideoTitle.jsx
├── hooks/
│   ├── useMovieTrailer.jsx
│   ├── useNowPlayingMovies.jsx
│   ├── usePopularMovies.jsx
│   ├── useTopRatedMovies.jsx
│   └── useUpComingMovies.jsx
├── index.css
├── main.jsx
└── utilities/
    ├── appStore.js            # Redux store config, slices
    ├── configSlice.jsx
    ├── constants.jsx          # Hardcoded data like links
    ├── firebase.js
    ├── gptSlice.jsx
    ├── languageConstants.jsx
    ├── moviesSlice.jsx
    ├── openai.js
    ├── selectedMovieSlice.jsx
    ├── userSlice.js
    └── validation.jsx         # Form validation helpers

## Live Demo

- You can access the live demo of the project [here.](https://searchmovierecommendationsystem.netlify.app/)

## Contribution

- Feel free to fork the repository, submit issues, and open pull requests for improvements.
Your contributions are always welcome!
