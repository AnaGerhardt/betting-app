import type { MatchType } from "@/app/types/football-card";

export default function Matches({ ...match }: MatchType) {
  const { name, date, odds, urn } = match;
  const { firstTeam, draw, secondTeam } = odds;

  const day =
    new Date(date).getDay() +
    " " +
    new Date(date).toLocaleString("default", { month: "short" });
  const time = new Date(date).getHours + ":" + new Date(date).getMinutes();

  return (
    <div key={urn} className="flex">
      <span>{name}</span>
      <div className="flex flex-col">
        <div className="flex">
          <span>{day}</span>
          <span>{time}</span>
        </div>
        <button>{firstTeam}</button>
        <button>{draw}</button>
        <button>{secondTeam}</button>
      </div>
    </div>
  );
}
