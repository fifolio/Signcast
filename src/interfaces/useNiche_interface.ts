export interface useNiche_interface {
    niche: {
        height: number | string,
        width: number | string,
        depth: number | string,
    };
    setNiche: (key: string, value: number) => void;
}