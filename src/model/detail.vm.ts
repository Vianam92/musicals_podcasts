export interface DetailData {
    trackId: string;
    artworkUrl600: string;
    trackName: string;
    artistName: string;
    feedUrl: string;
}

export interface Data {
    id: string;
    artwork: string;
    name: string;
    artist: string;
    feedUrl?: string;
    summary?: string;
}

export interface IdRequest{
    podcastId?: string | undefined;
}

export interface Detail{
    podcast: Data[];
}

export interface DetailResult{
    results: DetailData[]
}