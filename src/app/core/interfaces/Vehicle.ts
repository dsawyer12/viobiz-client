export interface Vehicle {
    _id: String; // it's actually a prediefined mongoDB id. not sure if the type matters or if it can represented as a string.
    make: String;
    model: String;
    year: Number[]; // date year type instead
  // add a url field for the vehicle image thumbnail.
}
