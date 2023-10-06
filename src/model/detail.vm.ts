export interface DetailData {
    key?: string;
    id: string;
    artwork: string;
    name: string;
    artist: string;
}

export interface IdRequest{
    podcastId: string;
}

export interface Detail{
    podcast: DetailData[];
}