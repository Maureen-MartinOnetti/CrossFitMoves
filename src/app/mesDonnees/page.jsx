"use client";

const Acceuil = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/acceuil.jpg')] flex justify-center items-center w-full">
      <div className="w-1/3 m-8">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Mes donnees
        </h1>

        <div className="bg-white/45 rounded-lg shadow-lg p-10 m-2">
          <p className="m-2">Mon prenom :</p>

          <p className="m-2">Mon nom :</p>

          <p className="m-2">Mon adresse mail :</p>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
