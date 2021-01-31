export interface ExternalLink {
    _id: String; // it's actually a prediefined mongoDB id. not sure if the type matters or if it can represented as a string.
    name: String;
    url: String;
}