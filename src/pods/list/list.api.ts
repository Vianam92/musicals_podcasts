export class ListService{
    async getlistApiService(){
        return fetch(
          `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
        ).then((response) => response.json());
      }; 
}