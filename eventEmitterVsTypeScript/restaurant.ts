import {EventEmitter} from "events";
import { RestaurantEventName } from "./types/restaurant-events";

export class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        this.emit(RestaurantEventName.Open);
    }

    /**
     * Zamknięcie restauracji.
     */
    close() {
        this.emit(RestaurantEventName.Close);
    }

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        this.emit(RestaurantEventName.TableCountUpdate, -1);
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        this.emit(RestaurantEventName.TableCountUpdate, 1);
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        this.emit(RestaurantEventName.TableCountUpdate, -1);
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        this.emit(RestaurantEventName.TableCountUpdate, -1);
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        this.emit(RestaurantEventName.TableCountUpdate, 1);
    }
};