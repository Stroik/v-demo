import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faStar,
  faFileAlt,
  faImage,
  faFlask,
  faCube,
  faDatabase,
  faCommentAlt,
  faSyncAlt,
  faCog,
  faPlus,
  faMinus,
  faSun,
  faList,
  faUndoAlt,
  faPuzzlePiece,
  faExpandArrowsAlt,
  faFilter,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Sidebar() {
  const sidebarItems = [
    {
      icon: faHome,
      label: "Home",
      className: "flex flex-col items-center home-button",
      link: "/",
    },
    {
      icon: faChartBar,
      label: "Dashboards",
      className: "flex flex-col items-center dashboards-button",
      link: "#",
    },
    {
      icon: faStar,
      label: "Views",
      className: "flex flex-col items-center views-button",
      link: "#",
    },
    {
      icon: faFileAlt,
      label: "Documents",
      className: "flex flex-col items-center documents-button",
      link: "/documents",
    },
    {
      icon: faImage,
      label: "Reviews",
      className: "flex flex-col items-center image-button",
      link: "#",
    },
    {
      icon: faFlask,
      label: "Tests & Runs",
      className: "flex flex-col items-center tests-button",
      link: "#",
    },
    {
      icon: faCube,
      label: "Data Models",
      className: "flex flex-col items-center data-button",
      link: "#",
    },
    {
      icon: faDatabase,
      label: "Traceability Matrix",
      className: "flex flex-col items-center matrix-button",
      link: "#",
    },
  ];

  return (
    <aside className="sidebar w-24 bg-zinc-700 text-white flex flex-col items-center py-2 overflow-y-auto max-h-full px-2">
      <div className="aspect-square w-full bg-red-500 rounded-sm flex items-center justify-center text-white font-bold text-xl">
        <Link href="/">V</Link>
      </div>
      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.link}
              className={`text-gray-400 hover:text-red-500 rounded-lg group ${item.className}`}
            >
              <Button variant="ghost" size="icon" className="w-12 h-12">
                <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
              </Button>
              <span className="text-xs mt-1 text-center text-gray-400 group-hover:text-red-500">
                {item.label}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
