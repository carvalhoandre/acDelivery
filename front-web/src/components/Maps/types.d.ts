export type MapLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
    id: number;
}

export type MapPayload = {
    products: ProductId[];
} & OrderLocationData;

export type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    }; 
}

export type mapLocationProps = {
    onChangeLocation: (location: MapLocationData) => void;
}