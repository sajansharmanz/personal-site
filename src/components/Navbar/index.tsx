import {
  BriefcaseIcon,
  HomeIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import HireMe from "../HireMe";

type Icon = typeof HomeIcon;

const urls: Array<{
  path: string;
  Icon: Icon;
}> = [
  {
    path: "/",
    Icon: HomeIcon,
  },
  {
    path: "about-me",
    Icon: UserCircleIcon,
  },
  {
    path: "/services",
    Icon: PuzzlePieceIcon,
  },
  {
    path: "/my-work",
    Icon: BriefcaseIcon,
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-2 w-full rounded-xl px-2 shadow-lg sm:left-1/2 sm:max-w-[560px] sm:-translate-x-1/2 sm:px-0">
      <nav className="flex h-16 items-center justify-between rounded-xl bg-white p-4">
        <ul className="flex items-center justify-start">
          {urls.map(({ path, Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  (isActive
                    ? "bg-slate-100"
                    : "bg-transparent text-slate-400 hover:bg-slate-50 hover:text-slate-500 focus:bg-slate-50 focus:text-slate-500") +
                  " block rounded-full p-2"
                }
              >
                <Icon className="size-7" />
              </NavLink>
            </li>
          ))}
        </ul>
        <HireMe />
      </nav>
    </header>
  );
}
