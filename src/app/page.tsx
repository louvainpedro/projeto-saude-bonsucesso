"use client";
import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

interface Disease {
  title: string,
  description: string,
  video_link: string,
  pdf_link: string,
  image: string,
}

const diseases: Disease[] = [
  {
    title: "Diabetes Mellitus",
    description: "O Diabetes Mellitus é uma condição crônica que afeta a forma como o corpo metaboliza a glicose, resultando em níveis elevados de açúcar no sangue. Existem dois tipos principais: Tipo 1 e Tipo 2.",
    video_link: "https://www.exemplo.com/video-diabetes",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/ExampleIMG.jpg"
  },
  {
    title: "Hipertensão Arterial",
    description: "A Hipertensão Arterial, também conhecida como pressão alta, é uma condição crônica caracterizada pela pressão elevada nas artérias, aumentando o risco de doenças cardíacas e derrames.",
    video_link: "https://www.exemplo.com/video-hipertensao",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/sotckPhotoHipertensao.jpg"
  },
  {
    title: "Asma",
    description: "A Asma é uma doença inflamatória crônica das vias respiratórias que causa dificuldade em respirar, caracterizada por crises recorrentes de falta de ar, chiado e aperto no peito.",
    video_link: "https://www.exemplo.com/video-asma",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/asma.jpg"
  },
  {
    title: "Doença de Alzheimer",
    description: "A Doença de Alzheimer é um distúrbio neurodegenerativo progressivo que causa perda de memória, confusão e alterações de comportamento, afetando principalmente pessoas idosas.",
    video_link: "https://www.exemplo.com/video-alzheimer",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/Alzheimer.jpg"
  },
  {
    title: "Artrite Reumatoide",
    description: "A Artrite Reumatoide é uma doença autoimune crônica que provoca inflamação nas articulações, causando dor, inchaço e, com o tempo, deformidades.",
    video_link: "https://www.exemplo.com/video-artrite-reumatoide",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/atrite.jpg"
  },
  {
    title: "Doença Pulmonar Obstrutiva Crônica (DPOC)",
    description: "A DPOC é um grupo de doenças pulmonares que bloqueiam o fluxo de ar e dificultam a respiração. Inclui o enfisema e a bronquite crônica.",
    video_link: "https://www.exemplo.com/video-dpoc",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/pulmonar.jpg"
  },
  {
    title: "Câncer de Mama",
    description: "O Câncer de Mama é um tipo de câncer que se desenvolve nas células da mama, afetando principalmente as mulheres, embora também possa ocorrer em homens.",
    video_link: "https://www.exemplo.com/video-cancer-mama",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/mama.jpg"
  },
  {
    title: "Doença Celíaca",
    description: "A Doença Celíaca é uma condição autoimune em que a ingestão de glúten leva a danos no intestino delgado, resultando em má absorção de nutrientes.",
    video_link: "https://www.exemplo.com/video-doenca-celiaca",
    pdf_link: "/pdf/exemplo.pdf",
    image: "/images/celicaca.jpg"
  }
];

export default function Home () {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (search: string) => {
    setSearchQuery(search);
  };

  return(
    <div className="w-full h-full bg-light-gray flex flex-col">
      <Header onSearch={handleSearch}/>
      <Menu diseases={diseases} searchQuery={searchQuery}/>
    </div>
  )
}