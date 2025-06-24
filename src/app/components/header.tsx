import React, { useState } from "react";

interface HeaderProps {
  onSearch: (search: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex w-full bg-mid-red-I h-20 justify-between px-2 md:px-8">
      {/* Container para agrupar todas as imagens */}
      <div className="flex items-center gap-x-4">
        {/* 1. Imagem original (a logo) */}
        <img
          src="images/logoProjetoSaude.png"
          alt="Company Logo"
          className="h-20 my-auto"
        />
        {/* 2. Segunda imagem */}
        <img
          src="images/logo_prefeitura.png"
          alt="Logo da Prefeitura de Saquarema."
          className="h-16 my-auto hidden md:block"
        />
        {/* 3. Terceira imagem */}
        <img
          src="images/logo_saude_familia.png"
          alt="Logo de Sáude da Família."
          className="h-16 my-auto hidden md:block"
        />
      </div>

      <div className="flex h-full items-center text-black">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Pesquisar"
          className="text-sm p-2 lg:w-96 border rounded-md shadow-sm text-black focus:outline-light-red-I focus:ring-0 focus:border-transparent"
        />
      </div>
    </div>
  );
}