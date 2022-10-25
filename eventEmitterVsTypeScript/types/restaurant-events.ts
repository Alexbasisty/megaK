export enum RestaurantEventName {
    TableCountUpdate = 'tableCountUpdate',
    Open = 'open',
    Close = 'close',
}

export type RestaurantEvent = (eventName: RestaurantEventName) => boolean;
export type RestaurantTableCountChangeEvent = (eventName: RestaurantEventName.TableCountUpdate, incDec: number) => boolean;
export type RestaurantTableCountChangeCallback = (incDec: number) => boolean;