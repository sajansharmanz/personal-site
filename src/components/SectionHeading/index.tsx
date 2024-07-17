interface Props {
  title: string;
}

export default function SectionHeading({ title }: Props) {
  return (
    <div className="flex items-center justify-start rounded-xl px-2 py-1">
      <div className="mr-2 h-2 w-2 rounded-full bg-slate-400" />
      <span className="text-lg font-medium capitalize tracking-wide text-slate-900">
        {title}
      </span>
    </div>
  );
}
