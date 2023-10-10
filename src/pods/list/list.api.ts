const cors = "https://cors-anywhere.herokuapp.com/";
export class ListService{
    async getlistApiService(){
        return fetch(
          `${cors}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
        ).then((response) => response.json());
      }; 
}