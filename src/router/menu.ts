import { RouteObject } from "react-router-dom";

const Menu: Array<RouteObject> = [
    {
        id: "Introduction",
        path: '/',
        async lazy() {
            let Introduction = await import('../layout/intro/introduction');
            return { Component: Introduction.default };
        },
    },
    {
        id: "Instalation",
        path: 'instalation',
        async lazy() {
            let Instalation = await import('../layout/instal/instalation');
            return { Component: Instalation.default };
        },
    },
    {
        id: "Component",
        path: 'component',
        children: [
            {
                id: "Button",
                path: 'button',
                index: true,
                async lazy() {
                    let Button = await import('../layout/components/button/button');
                    return { Component: Button.default };
                },
            },
            {
                id: "Input",
                path: 'input',
                index: true,
                async lazy() {
                    let Input = await import('../layout/components/input/input');
                    return { Component: Input.default };
                },
            },
            {
                id: "Select",
                path: 'select',
                async lazy() {
                    let Select = await import('../layout/components/select/select');
                    return { Component: Select.default };
                },
            },
            {
                id: "Checkbox",
                path: 'checkbox',
                async lazy() {
                    let Checkbox = await import('../layout/components/checkbox/checkbox');
                    return { Component: Checkbox.default };
                },
            },
            {
                id: "Table",
                path: 'table',
                async lazy() {
                    let Table = await import('../layout/components/table/table');
                    return { Component: Table.default };
                },
            },
            {
                id: "Tab",
                path: 'tabs',
                async lazy() {
                    let Tabs = await import('../layout/components/tabs/tabs');
                    return { Component: Tabs.default };
                },
            },
        ]
    },

]

export default Menu;