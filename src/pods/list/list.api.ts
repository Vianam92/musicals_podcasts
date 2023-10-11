const cors = "https://api.allorigins.win/raw?url=";
const URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  export const getlistApiService = async () => {
    try {
      const response = await fetch(`${cors}${encodeURIComponent(`${URL}`)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
