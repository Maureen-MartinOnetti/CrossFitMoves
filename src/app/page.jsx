"use client";

import { useRouter } from "next/navigation";

const Acceuil = () => {
  const router = useRouter();
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/acceuil.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 flex w-full h-full">
        <div className="basis-1/2">
          <div className="text-stone-200 text-left p-10 h-full flex flex-col items-center justify-center m-1">
            <p>
              Bienvenue sur CrossFitMoves, ta destination incontournable pour
              tout ce qui concerne les mouvements et entrainements CrossFit. Que
              tu sois un debutant ou un athlete experimente, toi aussi tu t'es
              deja demande ce que signifiaient les noms des mouvements! Ce site
              est la pour t'eclairer. Trouve facilement des videos explicatives
              et demonstratives de tous les mouvements CrossFit grace a notre
              barre de recherche intuitive. Les mouvements sont classes par
              categories et en ordre alphabetique pour une navigation
              simplifiee. Tu peux egalement decouvrir une grande variete de WODs
              (Workout of the Day) a realiser avec ou sans equipement. Connecte
              toi pour sauvegarder tes mouvements et WODs preferes, et garder en
              memoire tout ce que tu aimes.
            </p>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col pt-5 pb-4 pr-3">
          {" "}
          <div
            className="flex-1 flex justify-center text-white items-center bg-white/5  hover:bg-white/10 hover:cursor-pointer rounded-lg transition-transform transform hover:scale-105"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              router.push("/mouvements");
            }}
          >
            Mouvements
          </div>
          <div className="basis-1/2 flex flex-col pt-4 pb-1">
            {" "}
            <div
              className="flex-1 flex justify-center text-white items-center bg-white/5 hover:bg-white/10 hover:cursor-pointer rounded-lg transition-transform transform hover:scale-105"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                router.push("/wods");
              }}
            >
              Wods
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
