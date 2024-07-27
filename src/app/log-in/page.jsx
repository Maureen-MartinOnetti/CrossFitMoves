"use client";

import React, { useState } from "react";

const ConnectionCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sticky flex flex-1 items-center justify-center min-h-full w=full bg-cover bg-center bg-[url('/logIN.jpg')]">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-12 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white px-12 py-2 border border-transparent rounded-md bg-[#272628]"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnectionCard;
