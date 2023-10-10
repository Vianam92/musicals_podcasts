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
    description: string;
}

export interface Data {
    id?: string | number;
    artwork: string;
    trackName: string;
    artist?: string;
    collection?: string;
    summary?: string;
    date: string;
    url?: string;
    description: string;
    idTrack: string;
}

export interface IdRequest{
    podcastId?: string | undefined;
    episodeId?: string | undefined;
}

export interface Detail{
    id?: string | number;
    detail?: Data[];
    episodes?: Data[];
    episode?: Data[];
}

export interface DetailResult{
    results: DetailData[]
}