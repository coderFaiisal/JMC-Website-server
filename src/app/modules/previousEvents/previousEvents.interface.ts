export interface IPreviousEvent {
  title: string;
  photoURL: string;
  speakers: string[];
  description: string;
  organizer: string;
  date: string;
  videos: string[];
  photos: string[];
  testimonials: {
    name: string;
    image: string;
    message: string;
    position: string;
  }[];
}
