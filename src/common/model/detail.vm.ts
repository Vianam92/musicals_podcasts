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

export interface DetailModel{
    detail: Detail[];
    episodes: Episodes[];
}

export interface Detail{
    id: string | number;
    artwork: string;
    artist: string;
    trackName: string;
    summary: string;
    idTrack: string | number;
    url?: string | undefined;
    date: string;
    description: string;
}

export interface Episodes{
    id: string | number;
    artwork: string;
    artist?: string | undefined;
    trackName: string;
    summary: string;
    description: string;
    idTrack: string | number;
    url?: string;
    date: string;
}
export interface EpisodesAudio {
    trackName: string;
    url: string | undefined;
    description: string;
    idTrack?: string | number;
}
export interface IdRequest{
    podcastId: string | undefined ;
}

export interface IdEpisodeRequest{
    episodeId: string | undefined;
}

export interface DetailResult{
    results: DetailData[]
}