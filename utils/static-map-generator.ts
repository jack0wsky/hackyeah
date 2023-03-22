import axios from "axios";

interface IMapboxResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  matching_place_name: string;
  center: number[];
  geometry: Geometry;
  address: string;
  context: Context[];
}

interface Context {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Properties {
  accuracy: string;
}

export class StaticMapGenerator {
  constructor(
    street: string,
    postalCode: string,
    city: string,
    countryCode: "PL"
  ) {
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.countryCode = countryCode;
  }

  private readonly street;
  private readonly postalCode;
  private readonly city;
  private readonly countryCode;

  private apiKey = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  private baseUrl = "https://api.mapbox.com/styles/v1/mapbox";
  private size = "400x800@2x";
  private zoom = 14;
  private bearing = 0;

  async getAddressDetails() {
    const encodedAddress = encodeURI(
      `${this.street}, ${this.postalCode} (${this.countryCode}) Warsaw`
    );

    const { data } = await axios.get<IMapboxResponse>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${this.apiKey}`
    );
    return data.features[0];
  }

  async generate() {
    const result = await this.getAddressDetails();

    const [longitude, latitude] = result.geometry.coordinates;

    const pin = `pin-l+2871ff(${longitude},${latitude})`;

    return `${this.baseUrl}/streets-v11/static/${pin}/${longitude},${latitude},${this.zoom},${this.bearing}/${this.size}?access_token=${this.apiKey}`;
  }
}
