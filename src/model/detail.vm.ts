export interface DetailData {
    artistId?: string | number;
    collectionId?: string | number;
    artworkUrl600: string;
    trackName: string;
    artistName: string;
    collectionViewUrl: string;
    trackId: string;
    releaseDate: string;
    previewUrl?: string;
}

export interface Data {
    id?: string | number;
    artwork: string;
    trackName: string;
    artist: string;
    collection?: string;
    summary?: string;
    date: string;
    url?: string;
}

export interface IdRequest{
    podcastId?: string | undefined;
}

export interface Detail{
    detail: Data[];
}

export interface DetailResult{
    results: DetailData[]
}