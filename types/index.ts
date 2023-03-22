export interface IconProps {
  className?: string;
}

export type ModalType = "add-leftover";

export interface ISpot {
  name: string;
  address: {
    street: string;
    houseNumber: string;
    postalCode: string;
  };
}

export interface ICityWithEventSpot {
  city: string;
  spots: ISpot[];
}
