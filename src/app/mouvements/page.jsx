"use client";

import { useRouter } from "next/navigation";

const Acceuil = () => {
  const router = useRouter();
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/acceuil.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 flex w-full h-full">
        <div className="basis-1/2 flex flex-col pt-4 pb-1 p-4">
          <div
            className="flex-1 flex justify-center items-center text-white text-2x bg-white/5 hover:bg-white/10 hover:cursor-pointer rounded-lg transition-transform transform hover:scale-105"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              router.push("/mouvementsGym");
            }}
          >
            Tous les mouvements de gym
          </div>
        </div>
        <div className="basis-1/2 flex flex-col pt-4 pb-1 p-4">
          <div
            className="flex-1 flex justify-center items-center text-white text-2xl bg-white/5 hover:bg-white/10 hover:cursor-pointer rounded-lg transition-transform transform hover:scale-105"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              router.push("/haltero");
            }}
          >
            Tous les mouvements d'halterophilie
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
