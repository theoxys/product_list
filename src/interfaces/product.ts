export interface Product {
  ProductID: number;
  Name: string;
  Price: number;
  RetailPrice: number;
  ThumbnailURL: string;
  PictureURL: string;
  Description: string;
  Category: string;
  CategoryID: number;
  Brand: string;
  Color: string;
  Badges?: string;
  RatingAvg: number;
  RatingCount: number;
  Stock: number;
  DateCreated: string;
}
