export interface CollectedData_interface {

    // From Description
    title: string,
    drawer: string,
    department: string,
    screen_size: string,
    date: string,

    // From Configurations
    screen_MFR: string,
    media_Player_MFR: string,
    mounts: string,
    receptacle_Box: string,

    // From Layout Parameters
    orientation: string,
    placement: string,
    nicheDepthVar: number,
    floorDistance: number,

    // From Niche Dimensions
    niche_width: number | string,
    niche_height: number | string,
    niche_depth: number | string,

    // From Screen Dimensions
    screen_floorLine: number | string,
    screen_width: number | string, 
    screen_height: number | string,
    screen_weight: string,

    // From Diagram
    diagramURL: string,

    // From Notes
    notes: string,
}