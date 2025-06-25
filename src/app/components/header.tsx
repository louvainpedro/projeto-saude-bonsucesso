import React from "react";

// Removi o 'useState' pois não era mais necessário neste componente
// depois das últimas refatorações.

interface HeaderProps {
  onSearch: (search: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  // A função de busca agora é chamada diretamente no 'onChange'.
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-mid-red-I p-4 md:h-20 md:flex-row md:justify-between md:px-8 md:py-0">
      {/* Container das logos atualizado para 4 imagens */}
      <div className="flex items-center justify-center gap-x-3 md:gap-x-4">
        <img
          src="images/logoProjetoSaude.png"
          alt="Logo do Projeto Saúde Bonsucesso"
          className="h-14 md:h-16"
        />
        <img
          src="images/logo_prefeitura.png"
          alt="Logo da Prefeitura de Saquarema"
          className="h-12 md:h-14"
        />
        <img
          src="images/logo_saude_familia.png"
          alt="Logo de Saúde da Família"
          className="h-12 md:h-14"
        />
        {/* Nova logo adicionada */}
        <img
          src="images/uni_logo.png"
          alt="Logo da UniLaSalle"
          className="h-12 md:h-14"
        />
      </div>

      {/* Container da busca - sem alterações */}
      <div className="flex w-full items-center text-black md:w-auto">
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Pesquisar por tema..."
          className="w-full rounded-md border p-2 text-sm text-black shadow-sm focus:border-transparent focus:outline-light-red-I focus:ring-0 lg:w-96"
        />
      </div>
    </div>
  );
}