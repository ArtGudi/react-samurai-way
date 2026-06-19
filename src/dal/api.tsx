export type TrackDetailsResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export type GetTrackDetailsOutput = {
  data: TrackDetailsResource;
};

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: {
        //"api-key": "c44f1ebc-1bcb-41cf-b62e-de773858faf5",
      },
    },
  ).then((res) => res.json());

  return promise;
};

type AttacjmentDto = {
  url: string;
};

type TrackListItemAttributes = {
  title: string;
  attachments: Array<AttacjmentDto>;
};

export type TrackListItemResource = {
  id: string;
  attributes: TrackListItemAttributes;
};

export type GetTrackListOutput = {
  data: Array<TrackListItemResource>;
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/",
    {
      headers: {
        //"api-key": "c44f1ebc-1bcb-41cf-b62e-de773858faf5",
      },
    },
  ).then((res) => res.json());
  return promise;
};
