import React, { useState, createContext } from 'react';

export const MenuContext = createContext({
    open: false,
    setOpen: () => { },
});

export default function NavManager(props) {
    const [open, setOpen] = useState(false);
    return <MenuContext.Provider value={{ open, setOpen }}>{props.children}</MenuContext.Provider>
}
