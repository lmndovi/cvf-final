export interface Vegetable {
  _id: string;
  name: string;
  price: number;
  image: any;
}

export interface CropsForHarvest {
  _id: string;
  name: string;
  harvestDate: string;
  image: any;
}

export interface CarouselImages {
  _id: string;
  image: any;
  alt: string;
}
