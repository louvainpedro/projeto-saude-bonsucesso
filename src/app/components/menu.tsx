import Link from "next/link";
import React from "react";
// import Image from "next/image";

interface Disease {
  title: string;
  description: string;
  video_link: string;
  pdf_link: string;
  image: string;
}

interface MenuProps {
  diseases: Disease[];
  searchQuery: string;
}

export default function Menu({ searchQuery, diseases }: MenuProps) {
  function downloadPDF(link: string) {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.setAttribute("download", "");
    anchor.click();
  }

  const filteredDiseases = diseases.filter((disease) =>
    disease.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="flex w-full h-full px-2 md:px-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease) => (
            <div
              key={disease.title}
              id="card"
              className="flex flex-col p-2 md:border rounded-lg border-gray-300 mx-2 w-full shadow-lg mb-10"
            >
              <div
                id="image"
                className="w-full flex justify-center items-center"
              >
                <img
                  src={disease.image}
                  alt={disease.title}
                  className="w-full h-full rounded-lg object-cover"
                  // width={300}
                  // height={200}
                />
              </div>
              <div
                id="texts"
                className="flex flex-col text-left text-gray-800 mt-4 font-Jost"
              >
                <h3 className="font-bold text-xl">{disease.title}</h3>
                <p className="mt-2 text-lg font-Poppins">
                  {disease.description}
                </p>
                <div className="flex justify-between mt-2">
                  {/* ***** INÍCIO DA ALTERAÇÃO ***** */}
                  <Link
                    href={disease.video_link}
                    // Adicionado 'flex', 'items-center' e 'gap-x-1.5' para alinhar o ícone e o texto
                    className="mt-2 flex items-center gap-x-1.5 text-lg underline text-light-blue hover:text-blue-700"
                  >
                    {/* Ícone SVG do YouTube */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5" // Tamanho proporcional
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    Saiba mais!
                  </Link>
                  {/* ***** FIM DA ALTERAÇÃO ***** */}
                  <button
                    className="flex hover:text-light-blue"
                    onClick={() => downloadPDF(disease.pdf_link)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                      />
                    </svg>
                    <label className="self-center pt-2">
                      Baixar Informativo
                    </label>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-800">Nenhuma doença encontrada.</p>
        )}
      </div>
    </section>
  );
}