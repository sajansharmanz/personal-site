import { BoltIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function HireMe() {
  return (
    <Link
      to="hire-me"
      className="group flex items-center justify-center gap-1 rounded-md bg-slate-900 px-2 py-1 font-medium text-slate-50"
    >
      <BoltIcon className="group-hover:animate-shake size-5" /> Hire Me
    </Link>
  );
}
