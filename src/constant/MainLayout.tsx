import React, { Fragment, ReactNode, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

interface IMainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Fragment>
            <div className="flex h-full">
                <div
                    className={`fixed lg:relative lg:top-0 top-14 left-0 h-full lg:h-auto transform ${isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                        } transition-transform duration-300 ease-in-out text-white z-20`}
                >
                    <Sidebar />
                </div>
                <div className="flex flex-col w-full">
                    <Navbar
                        isSidebarOpen={isSidebarOpen}
                        handleSidebarToggle={handleSidebarToggle}
                    />
                    <main className="w-full p-4 bg-[#F6F7F9]">{children}</main>
                </div>
            </div>
        </Fragment>
    );
};

export default MainLayout;
