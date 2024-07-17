import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  to?: string;
}

export default function ServiceItem({ title, Icon, to = "#" }: Props) {
  return (
    <Link
      to={to}
      className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white p-2 hover:ring-4 hover:ring-slate-200 hover:transition-all hover:duration-200"
    >
      <div className="flex max-w-[90%] flex-1 items-center justify-start space-x-2">
        <div className="rounded-full bg-slate-100 p-2">
          <Icon className="size-7" />
        </div>
        <p>{title}</p>
      </div>
      <ArrowUpRightIcon className="mr-2 size-4 text-slate-400 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-slate-900 group-hover:transition-all group-hover:duration-200" />
    </Link>
  );
}
