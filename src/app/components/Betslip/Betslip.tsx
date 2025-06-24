"use client";

import useStore from "@/app/store/store";

const Betslip = () => {
  const bets = useStore((state) => state.bets);
  return (
    <section className="bg-white flex w-1/4 min-h-screen rounded-md flex flex-col py-4 px-3 gap-y-5">
      <h3>Betslip</h3>
      {bets.length > 0 ? (
        bets.map(({ matchName, competitor }) => {
          const { urn, name, odds } = competitor;
          return (
            <div
              key={urn}
              className="flex justify-between p-2 border-b-2 border-gray-200"
            >
              <span>{matchName}</span>
              <span>
                {competitor.name} - {competitor.odds}
              </span>
            </div>
          );
        })
      ) : (
        <div className="text-center flex flex-col gap-y-5">
          <h3>Your betslip is empty.</h3>
          <span>
            Please make one or more selections in order to place bets.
          </span>
        </div>
      )}
    </section>
  );
};

export default Betslip;
