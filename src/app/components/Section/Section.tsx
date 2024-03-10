import { SectionProps } from "./types";

export const Section = ({ title, description, children }: SectionProps) => {
  return (
    <div className="block w-full">
      <h2 className="text-xl pb-2">{title}</h2>
      {description && <p className="text-slate-600">{description}</p>}
      <div className="pt-8">{children}</div>
    </div>
  );
};
