export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_large.jpg";

export const PROFILE_LOGO = "https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const GITHUB_PHOTO_URL = "https://avatars.githubusercontent.com/u/181178901?s=400&u=6f52ea8f316f453ec9e166adeaf9b3994f17a4d1&v=4";

export const NOTIFICATION_ICON = "https://tse3.mm.bing.net/th/id/OIP.r5gQKjxiZEnnVnErniZOVQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGIxYWQ5ZTllYTRlNjI0ZDJiMGEzN2EzYzgzYTdhYyIsIm5iZiI6MTc1NTk0MDMyMC4xNzcsInN1YiI6IjY4YTk4NWUwODUxNzI4MTg1NDFlNDc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NstnI4rR9_6F8B2iDppJdboSLTNP-C4JwQAsYJUw2JM'
  }
};

export const TMDB_NOWPLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POSTER_PATH = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2";

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const TMDB_POPULAR_API = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TMDB_TOP_RATED_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const TMDB_UPCOMING_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

// SUPPORTED_LANGUAGES is used in options of select element to show differen languages as dropdown
// IMPORTANT NOTE: here identifier is the key in the languages (and it must be same)
// it shows how many languages we are supporting right now
export const SUPPORTED_LANGUAGES = [
  {identifier : "en", name : "English"},
  {identifier : "hindi", name : "Hindi"},
  {identifier : "telugu", name : "Telugu"},
  {identifier : "spanish", name : "Spanish"},
  {identifier : "arabic", name : "Arabic"},
];
      