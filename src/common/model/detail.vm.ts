export interface DetailResult{
    results: DetailData[]
}

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

export interface DetailMapper{
    id: string | number | undefined;
    artwork: string;
    artist: string;
    trackName: string;
    summary?: string | undefined;
    idTrack: string | number;
    url?: string | undefined;
    date: string;
    description: string;
}

export interface Detail{
    id: string | number;
    artwork: string;
    artist: string;
    trackName: string;
    summary: string;
    idTrack?: string | number;
    date?: string;
}

export interface Episodes{
    id: string | number;
    artwork: string;
    trackName: string;
    description: string;
    idTrack: string | number;
    url: string;
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
