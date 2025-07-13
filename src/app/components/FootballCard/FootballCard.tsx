import FootballMatch from "../FootballMatch/FootballMatch";
import competitions from "./FootballCard.data";

const FootballCardComponent = () => {
  return (
    <section className="flex bg-white rounded-md flex-col">
      <h3 className="p-2">Football</h3>
      {competitions.map((competition) => {
        const { urn, title, matches } = competition;
        return (
          <article key={urn}>
            <header className="flex bg-gray-300 text-gray-700 h-36px p-2 text-xs font-bold w-full justify-between">
              <span>{title}</span>
            </header>
            {matches.map((match) => (
              <FootballMatch key={match.urn} {...match} />
            ))}
          </article>
        );
      })}
    </section>
  );
};

export default FootballCardComponent;
