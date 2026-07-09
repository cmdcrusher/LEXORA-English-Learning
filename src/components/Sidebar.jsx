import logo from "../../public/B5D3CF06-7947-4DF4-939F-81253E22B2B3.png"
import {
    HomeIcon as HomeIconOUT,
    ClipboardDocumentCheckIcon as ClipboardDocumentCheckIconOUT,
    BookOpenIcon as BookOpenIconOUT,
    PresentationChartBarIcon as PresentationChartBarIconOUT,
    Cog6ToothIcon as Cog6ToothIconOUT,
    ShoppingBagIcon as ShoppingBagIconOUT,
    PuzzlePieceIcon as PuzzlePieceIconOUT,
    UsersIcon as UsersIconOUT,
    ChartBarSquareIcon as ChartBarSquareIconOUT,
} from '@heroicons/react/24/outline'
import {
    HomeIcon,
    ClipboardDocumentCheckIcon,
    BookOpenIcon,
    PresentationChartBarIcon,
    Cog6ToothIcon,
    ShoppingBagIcon,
    PuzzlePieceIcon,
    UsersIcon,
    ChartBarSquareIcon,
} from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { useProfile } from "../hooks/useProfile";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
    const profile = useProfile();
    const isTeacher = profile?.role === "teacher";
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <>
            {/* затемнение фона на мобиле, когда сайдбар открыт — клик закрывает */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                />
            )}

            <aside
                className={`flex flex-col gap-2 w-64 border-r-2 border-gray-200 h-screen fixed z-50 bg-white transition-transform duration-200
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0`}
            >
                <div className="flex items-center justify-between px-8 py-6 ml-5">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="" className="w-auto h-8" />
                        <p className="text-2xl text-violet-900 font-semibold">Lexora</p>
                    </div>

                    {/* крестик закрытия — виден только на мобиле */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden text-gray-400 hover:text-gray-600 mr-4"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav>
                    <Item IconSolid={HomeIcon} IconOut={HomeIconOUT} text="Home" link="/dashboard" />
                    <Item IconSolid={ClipboardDocumentCheckIcon} IconOut={ClipboardDocumentCheckIconOUT} text="Lessons" link="/lessons" />
                    <Item IconSolid={PuzzlePieceIcon} IconOut={PuzzlePieceIconOUT} text="Practice" link="/practice" />
                    <Item IconSolid={BookOpenIcon} IconOut={BookOpenIconOUT} text="Vocabulary" link="/vocabulary" />
                    {!isTeacher && (
                        <Item IconSolid={ClipboardDocumentCheckIcon} IconOut={ClipboardDocumentCheckIconOUT} text="Assignments" link="/assignments" />
                    )}
                    <Item IconSolid={ShoppingBagIcon} IconOut={ShoppingBagIconOUT} text="Shop" link="/shop" />

                    {isTeacher && (
                        <>
                            <div className="h-px bg-gray-100 mx-4 my-2" />
                            <Item IconSolid={PresentationChartBarIcon} IconOut={PresentationChartBarIconOUT} text="Assignments" link="/teacher/assignments" />
                            <Item IconSolid={ChartBarSquareIcon} IconOut={ChartBarSquareIconOUT} text="Analytics" link="/teacher/analytics" />
                            <Item IconSolid={UsersIcon} IconOut={UsersIconOUT} text="Classes" link="/teacher/classes" />
                        </>
                    )}
                </nav>

                <div className="mt-auto mb-4">
                    <Item IconSolid={Cog6ToothIcon} IconOut={Cog6ToothIconOUT} text="Settings" link="/settings" />
                </div>

            </aside>
        </>
    )
};

function Item({ text, IconOut, IconSolid, link }) {
    return (
        <NavLink to={link}>
            {({ isActive }) => {
                const Icon = isActive ? IconSolid : IconOut;
                return (
                    <div className={`flex items-center font-semibold rounded-xl hover:cursor-pointer px-4 py-3 m-4 ${
                        isActive ? "bg-[#f8f7fc] text-[#6658f3]" : ""
                    }`}>
                        <Icon className="w-6 h-6 mr-4" />
                        <span>{text}</span>
                    </div>
                );
            }}
        </NavLink>
    );
};