import { Vehicle } from './Vehicle';
import { ExternalLink } from './ExternalLink';

export interface Product {
    _id: String; // it's actually a prediefined mongoDB id. not sure if the type matters or if it can represented as a string.
    name: String;
    type: String;
    sku: String;
    brand: String;
    supplier: String; // supplier obj
    dims: {
        length: Number,
        width: Number,
        height: Number
    };
    weight: Number;
    stockOnHand: Number;
    availableStock: Number;
    shortDescription: String;
    description: String;
    fitment: Vehicle[];
    link: ExternalLink[];
}