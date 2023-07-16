export interface IMediaBuzz {
  title: string;
  bannerURL: string;
  guests: {
    name: string;
    imgURL: string;
    designation: string;
  }[];
  meetTheGuestVideos: {
    videoURL: string;
  }[];
  sponsors: {
    imgURL: string;
  }[];
  eventSessions: {
    name: string;
    posterURL: string;
    guests: string[];
    guestRole: string;
    photos: string[];
    videos: string[];
  }[];
  photoExhibition: {
    title: string;
    photos: string[];
  };
  memories: {
    photos: string[];
    videos: string[];
  };
  testimonials: {
    name: string;
    image: string;
    message: string;
    designation: string;
  }[];
}
