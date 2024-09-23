import { ModelNotification } from "./ModelNotification";
import "./style.css";
export declare class NotificationManager {
    private containerRef;
    private position;
    constructor();
    show(model: ModelNotification): void;
    destroy(documentId: string): void;
}
export declare const notification: NotificationManager;
