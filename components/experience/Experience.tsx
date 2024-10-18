import { ReactElement } from "react";

function Experience({
  date,
  compeny,
  position,
  children,
}: {
  date: string;
  compeny: string;
  position: string;
  children: ReactElement;
}) {
  return (
    <li className="relative pl-8 flex flex-col gap-2 experience-item">
      <div className="text-sm">{date}</div>
      <div className="compeny">{compeny}</div>
      <h2 className="text-lg font-bold">{position}</h2>
      {children}
    </li>
  );
}

export default Experience;
