const cors = "https://api.allorigins.win/raw?url=";
const URL = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
export class ListService{
    async getlistApiService(){
        return fetch(`${cors}${encodeURIComponent(
            `${URL}`
           )}`
        ).then((response) => response.json());
      }; 
}