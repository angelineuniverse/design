import { Component, ReactNode } from "react";
import { ModelNotification } from "./ModelNotification";
declare class Notification extends Component<ModelNotification> {
    state: Readonly<{
        tema: any;
    }>;
    constructor(props: ModelNotification);
    componentDidMount(): void;
    render(): ReactNode;
}
export default Notification;
