export type WebsiteType = {
  slug: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  colors: string[];
  scroll: string;
  date: string;
};

export type ColorType = {
  name: string;
  hex: string;
  light: boolean;
};

export type ColorsMap = Record<string, ColorType>;
