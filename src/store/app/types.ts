export interface IImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface ImagesState {
  images: IImage[];
  page: number;
  imageError: string | null;
  imageStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  user: IUser | null;
  userError: string | null;
  userStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
