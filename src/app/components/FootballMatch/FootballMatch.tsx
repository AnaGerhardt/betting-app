import type { MatchType } from "@/app/store/store.types";
import BetButton from "../BetButton/BetButton";

export default function Matches({ ...match }: MatchType) {
  const { name, date, competitors, urn } = match;

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const time = dateObj.getHours() + ":" + dateObj.getMinutes();

  return (
    <div
      key={urn}
      className="flex justify-between p-2 [&:not(:last-child)]:border-b-2 border-gray-200"
    >
      <span className="self-center">{name}</span>
      <div className="flex gap-x-2">
        <div className="flex flex-col text-xs font-bold justify-center text-right">
          <span>{day + " " + month}</span>
          <span>{time}</span>
        </div>
        <div className="flex gap-x-[1px]">
          {competitors.map((competitor) => {
            return (
              <BetButton
                key={competitor.urn}
                matchName={match.name}
                competitor={competitor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
