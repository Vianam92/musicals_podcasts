export interface DetailData {
    id: string;
    artwork: string;
    name: string;
    artist: string;
}

export interface IdRequest{
    podcastId?: string | undefined;
}

export interface Detail{
    podcast: DetailData[];
}