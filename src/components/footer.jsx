"use client";

import { Instagram, Mail } from "lucide-react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 w-full flex items-center justify-center bg-[#272628]">
      <div className="w-full flex items-center justify-between p-4 text-white">
        {/* Gauche */}
        <div className="flex items-center justify-center">
          <Link href="https://www.instagram.com/maureen.m.o/">
            <Instagram className="cursor-pointer" />
          </Link>
        </div>
        {/*Centre*/}
        <div className="flex items-center gap-3">
          <a
            href="mailto:crossfit@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail className="cursor-pointer" />
            <span>Nous contacter</span>
          </a>
        </div>

        {/* Droite */}
        <div className="flex items-center gap-2">
          <Link href="https://github.com/Maureen-MartinOnetti">
            En savoir plus sur moi
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
