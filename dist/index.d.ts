import React$1, { DetailedHTMLProps, ButtonHTMLAttributes, Component, ReactNode, RefObject, ChangeEvent } from 'react';

type ButtonTheme = "primary" | "error" | "warning" | "outline" | "success";
type ButtonSize = "extrasmall" | "small" | "medium" | "large";
type ButtonWidth = "block" | "full";
interface ModelButton {
    title: string;
    className?: string;
    theme: ButtonTheme;
    size: ButtonSize;
    width: ButtonWidth;
    isLoading?: boolean;
    isDisable?: boolean;
    onClick?: React$1.MouseEventHandler<HTMLButtonElement>;
    props?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}

declare class Button extends Component<ModelButton> {
    render(): ReactNode;
}

declare class BreadCrumbs extends Component<any> {
    breadcrumb: () => any;
    render(): ReactNode;
}

interface ModelCheckbox {
    className?: string;
    label: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onValueChange?: any;
    defaultValue?: any;
}

declare class Checkbox extends Component<ModelCheckbox> {
    render(): React$1.ReactNode;
}

interface ModelCollapse {
    title: string;
    children?: React.ReactNode;
}

declare class Collapse extends Component<ModelCollapse> {
    state: Readonly<{
        open: boolean;
    }>;
    constructor(props: any);
    render(): React$1.JSX.Element;
}

interface ModelDialog {
    children?: React$1.ReactNode;
    onOpen: boolean | React$1.MouseEventHandler<HTMLDivElement>;
    onClose: React$1.MouseEventHandler<HTMLDivElement>;
    className?: string;
    size?: any;
    useHeading?: boolean;
    hideIconClose?: boolean;
    classHeading?: string;
    classTitle?: string;
    title?: string;
    subtitle?: string;
}

declare class Dialog extends Component<ModelDialog> {
    modal: RefObject<HTMLDivElement>;
    constructor(props: ModelDialog);
    render(): ReactNode;
}

type Direction = "bottom-right" | "bottom-left" | "right" | "left";
interface ModelDropdown {
    trigger: React.ReactNode;
    children: React.ReactNode;
    direction?: Direction;
}

declare class Dropdown extends Component<ModelDropdown> {
    state: Readonly<{
        show: boolean;
    }>;
    constructor(props: ModelDropdown);
    render(): ReactNode;
}

type InputSize$2 = "small" | "medium" | "large";
type InputType = "text" | "password" | 'number' | 'textarea' | 'time' | "upload" | "date" | "datetime-local" | "month";
interface ModelInput {
    defaultValue?: any;
    label: string;
    placeholder?: string;
    size?: InputSize$2;
    type?: InputType;
    accept?: string;
    filename?: string;
    preview_action?: string;
    preview?: any;
    readonly?: boolean;
    autosize?: boolean;
    className?: string;
    onValueChange?: any;
    isRequired?: boolean;
    description?: string;
    onChange?: React$1.ChangeEventHandler<HTMLInputElement>;
}

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
    render(): React$1.ReactNode;
}

type IconsType = "check" | "copy" | "error" | "eye" | "hideEye" | "download" | "arrow_down" | "close" | "arrow_left" | "arrow_left_simple" | "arrow_right_simple" | "arrow_down_simple" | "arrow_prev" | "arrow_next" | "phone" | "marker" | "mail" | "home_simple" | "menu" | "database" | "person" | "loading";
interface ModelIcon {
    icon: IconsType;
    width: number;
    height: number;
    color?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
}

declare class Icon extends Component<ModelIcon> {
    render(): ReactNode;
}

type NotificationPosition = 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';
type NotificationTheme = 'success' | 'error' | 'default' | 'warning' | 'info';
interface ModelNotification {
    key?: string;
    position: NotificationPosition;
    theme: NotificationTheme;
    body: React$1.ReactNode;
    title: string;
    duration?: number;
    onClose?: (e: React$1.MouseEventHandler<HTMLOrSVGElement>) => void;
    remove?: () => void;
}

declare class Notification extends Component<ModelNotification> {
    state: Readonly<{
        tema: any;
    }>;
    constructor(props: ModelNotification);
    componentDidMount(): void;
    render(): ReactNode;
}

interface ModelPagination {
    currentPage: number;
    totalPage: number;
    countItem: number;
    totalItem: number;
    className?: string;
}

declare class Pagination extends Component<ModelPagination> {
    state: Readonly<{
        paginate: Array<any>;
    }>;
    constructor(props: any);
    componentDidUpdate(prevProps: ModelPagination): void;
    classpaginatePage(index: number, currentPage: number): "bg-blue-600 text-white border-blue-300" | "border-gray-300";
    render(): ReactNode;
}

type InputSize$1 = "small" | "medium" | "large";
interface ModelSelect {
    label: string;
    size?: InputSize$1;
    placeholder?: string;
    className?: string;
    isRequired?: boolean;
    onchange?: any;
    onClick?: (e: React$1.MouseEventHandler<HTMLOptionElement>) => void;
    keyValue: string;
    keyoption: string;
    options: Array<any>;
}

declare class Select extends Component<ModelSelect> {
    state: Readonly<{
        open: boolean;
        placeholder: string;
    }>;
    constructor(props: ModelSelect);
    handleClickOutside: (e: any) => void;
    componentDidMount(): void;
    render(): ReactNode;
}

type InputSize = "small" | "medium" | "large";
interface ModelSelectSearch {
    label: string;
    size?: InputSize;
    value?: any;
    value_label?: any;
    className?: string;
    placeholder?: string;
    isRequired?: boolean;
    readonly?: boolean;
    openChildren?: boolean;
    children?: React$1.ReactNode;
    search_method: (e: any) => void;
}

declare class SelectSearch extends Component<ModelSelectSearch> {
    state: Readonly<{
        open: boolean;
        placeholder: string;
    }>;
    constructor(props: ModelSelectSearch);
    render(): ReactNode;
}

type TypeSkeleton = "text" | "image" | "avatar" | 'span' | "random" | "input" | "custom";
interface ModelSkeleton {
    type: TypeSkeleton;
    className?: string;
}

declare class Skeleton extends Component<ModelSkeleton> {
    render(): React$1.ReactNode;
}

interface ModelTable {
    classNameTable?: string;
    className?: string;
    useBack?: boolean;
    useCreate: boolean;
    notUseNumberRow?: boolean;
    useHeadline: boolean;
    createTitle?: string;
    title?: string;
    description?: string;
    skeletonRow?: number;
    create?: React.MouseEventHandler<HTMLButtonElement>;
    onBack?: React.MouseEventHandler<HTMLOrSVGElement>;
    loadingCreate?: boolean;
    column: Array<ResponseColumn>;
    property?: Object;
    data?: Array<any>;
    delete?: (e: any) => void;
    add?: (e: any) => void;
    show?: (e: any) => void;
    edit?: (e: any) => void;
    onEvent?: (e: any, key: string) => void;
    custom?: any;
    extraHeader?: React.ReactNode;
    isCompact?: boolean;
}
type TypeColumn = "list" | "string" | "datetime" | "object" | "array" | "currency" | "action" | "date" | 'status' | "custom" | 'action_status' | "date-prefix" | "file" | "date-prefix-custom";
interface ResponseColumn {
    key: string;
    name?: string;
    type: TypeColumn;
    classNameprefix?: string;
    prefix?: string;
    dateFormat?: string;
    child?: Array<ResponseColumn>;
    ability?: any;
    currency?: string;
    localecurrency?: string;
    minimumFractionDigits?: number;
    className?: string;
    classNameRow?: string;
    color?: string;
}

declare class Table extends Component<ModelTable> {
    previewFile(event: any): void;
    render(): ReactNode;
}

type TagType = 'code' | 'text';
type TagVariant = 'default' | 'accent' | 'success' | 'done' | 'error';
type TagSize = 'xs' | 'sm' | 'lg';
interface ModelTag {
    type: TagType;
    variant?: TagVariant;
    value: string;
    size?: TagSize;
    className?: string;
}

declare const Tag: React$1.FC<ModelTag>;

type TabsDirection = 'horizontal' | 'vertical';
type TabsWidth = 'wrap' | 'block';
type TabsVariant = 'solid' | 'underlined' | 'bordered' | 'light';
interface ModelTabs {
    tabDirection?: TabsDirection;
    tabSpace?: string;
    tabPadding?: string;
    tabVariant?: TabsVariant;
    width?: TabsWidth;
    classTitle?: string;
    children: Array<React.ReactElement>;
}

declare const Tabs: React$1.FC<ModelTabs>;

interface ModelTab {
    title: string;
    children: any;
    className?: string;
}

declare const Tab: React$1.FC<ModelTab>;

export { BreadCrumbs as Breadcrumb, Button, Checkbox, Collapse, Dialog, Dropdown, Icon, Input, Notification, Pagination, Select, SelectSearch, Skeleton, Tab, Table, Tabs, Tag };
