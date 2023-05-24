import { CarTypes } from "../Enum/carTypes";

export interface Car {
    id: number;
    model: string;
    description: string;
    type: CarTypes;
    image: string
}
