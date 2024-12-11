export interface useScreen_interface {
    screen: {
        height: number | string,
        width: number | string,
        'floor line': number | string,
    };
    setScreen: (key: string, value: number) => void;
}