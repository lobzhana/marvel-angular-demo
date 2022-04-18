export interface CharacterApiModel {
  id?: number;
  name?: string;
  description?: string;
  thumbnail?: { extension: string, path: string };
  comics: { items: { name: string, resourceURI: string }[] },
  events: { items: { name: string, resourceURI: string }[] },
  series: { items: { name: string, resourceURI: string }[] }
  stories: { items: { name: string, resourceURI: string }[] }
}
