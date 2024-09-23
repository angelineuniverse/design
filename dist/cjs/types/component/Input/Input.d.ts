import React, { ChangeEvent, Component, RefObject } from "react";
import { ModelInput } from "./ModelInput";
declare class Input extends Component<ModelInput> {
    state: Readonly<{
        visiblePassword: boolean;
        files: any;
        filename: any;
        refInputFile: RefObject<any>;
    }>;
    constructor(props: ModelInput);
    changeVisiblePassword(visible: boolean): "text" | "password";
    changeFile(event: any): void;
    deleteFile(): void;
    previewFile(event: any): void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => number;
    render(): React.ReactNode;
}
export default Input;
