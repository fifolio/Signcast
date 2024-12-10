import { ConfigurationsDataTypes } from "@/types/ConfigurationsDataTypes";

export interface useConfiguration_interface {
    configurations: ConfigurationsDataTypes[];
    setConfigurations: (state: ConfigurationsDataTypes[]) => void;
}