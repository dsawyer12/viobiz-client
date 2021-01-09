export interface PriceList {
    _id: String; // it's actually a prediefined mongoDB id. not sure if the type matters or if it can represented as a string.
    listName: String;
    price: Number;
}