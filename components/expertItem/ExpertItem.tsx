import { ReactElement } from "react";

function ExpertItem({
  icon,
  percent,
  color,
}: {
  icon: ReactElement;
  percent: number;
  color: string;
}) {
  return (
    <div
      style={{
        color: color,
      }}
      className="expert-item"
    >
      {icon}
      <div>
        <div
          style={{
            width: percent + "%",
          }}
        >
          <span>{percent}%</span>
        </div>
      </div>
    </div>
  );
}

export default ExpertItem;
