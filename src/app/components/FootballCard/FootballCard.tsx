import type { FootballCardType } from "@/app/types/football-card";
import FootballMatch from "../FootballMatch/FootballMatch";

const FootballCardComponent = ({ competitions }: FootballCardType) => {
  return (
    <section className="flex">
      {competitions.map((competition) => {
        const { urn, title, matches } = competition;
        return (
          <article key={urn}>
            <header>{title}</header>;
            {matches.map((match) => (
              <FootballMatch {...match} />
            ))}
          </article>
        );
      })}
      ;
    </section>
  );
};

export default FootballCardComponent;
