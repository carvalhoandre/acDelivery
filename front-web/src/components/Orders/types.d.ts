export type Product = {
    id: number;
    name: string; 
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
    id: number;
}

export type OrderPayload = {
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

export type orderLocationProps = {
    onChangeLocation: (location: OrderLocationData) => void;
}