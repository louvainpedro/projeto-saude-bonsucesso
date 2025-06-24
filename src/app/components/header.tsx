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

  // As classes foram reorganizadas para uma abordagem Mobile-First.
  // Padrão: Layout empilhado (flex-col).
  // A partir de 'md' (768px): Layout lado a lado (md:flex-row).
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-mid-red-I p-4 md:h-20 md:flex-row md:justify-between md:px-8 md:py-0">
      {/* Container das logos - nenhuma mudança necessária aqui */}
      <div className="flex items-center gap-x-4">
        <img
          src="images/logoProjetoSaude.png"
          alt="Company Logo"
          className="h-16 md:h-20" // Altura ajustada para mobile
        />
        <img
          src="images/logo_prefeitura.png"
          alt="Logo da Prefeitura de Saquarema."
          className="h-14" // Não precisa mais do hidden, pois o layout comporta
        />
        <img
          src="images/logo_saude_familia.png"
          alt="Logo de Sáude da Família."
          className="h-14" // Não precisa mais do hidden
        />
      </div>

      {/* Container da busca - agora ocupa a largura toda em telas pequenas */}
      <div className="flex w-full items-center text-black md:w-auto">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Pesquisar"
          // O input ocupa 100% do container, que por sua vez é 100% no mobile.
          className="w-full text-sm p-2 border rounded-md shadow-sm text-black focus:outline-light-red-I focus:ring-0 focus:border-transparent lg:w-96"
        />
      </div>
    </div>
  );
}