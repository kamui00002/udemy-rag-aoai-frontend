"use client";

import React, { useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../../store/store";
import SideMenu from "../../components/SideMenu/SideMenu";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [store] = useState(() => makeStore());
    return (
        <div className="flex h-screen">
            <Provider store={store}>
                <SideMenu />
            <main className="bg-slate-50 flex-1 over flow-y-auto">{children}</main>
            </Provider>
        </div>
    )
}

export default MainLayout;