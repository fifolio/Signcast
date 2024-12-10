import { DescriptionDataTypes } from "@/types/DescriptionDataTypes";

export interface useDescription_interface {
    description: DescriptionDataTypes[];
    setDescription: (state: DescriptionDataTypes[]) => void;
}