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
    video_link: "https://youtu.be/-VZuhAMujaE?feature=shared",
    pdf_link: "pdf/Diabetes.pdf",
    image: "images/ExampleIMG.jpg"
  },
  {
    title: "Hipertensão Arterial",
    description: "A Hipertensão Arterial, também conhecida como pressão alta, é uma condição crônica caracterizada pela pressão elevada nas artérias, aumentando o risco de doenças cardíacas e derrames.",
    video_link: "https://youtu.be/K7QnivczWVo?feature=shared",
    pdf_link: "pdf/Hipertensão (1).pdf",
    image: "images/sotckPhotoHipertensao.jpg"
  },
  {
    title: "Consultas Pré Natal",
    description: "A consulta pré-natal é um acompanhamento médico fundamental durante a gestação, visando monitorar a saúde da mãe e do bebê, garantindo uma gestação segura.",
    video_link: "https://youtu.be/oWoZRzf9w0M?feature=shared",
    pdf_link: "pdf/PreNatal.pdf",
    image: "images/PreNatal.jpg"
  },
  {
    title: "Puericultura",
    description: "A puericultura é a área da medicina dedicada ao acompanhamento do crescimento e desenvolvimento infantil, promovendo a saúde e prevenindo doenças desde os primeiros meses de vida.",
    video_link: "https://youtu.be/4xczsrR0YVo?feature=shared  ",
    pdf_link: "pdf/Puericultura.pdf",
    image: "images/Puericultura.png"
  },
  {
    title: "Vacinação",
    description: "A vacinação é uma medida preventiva essencial para proteger contra doenças infecciosas, estimulando o sistema imunológico a combater agentes patogênicos de forma segura e eficaz.",
    video_link: "https://youtu.be/gX3EtthJ1h4?feature=shared",
    pdf_link: "pdf/Vacinação.pdf",
    image: "images/Vacina.jpg"
  },
  {
    title: "Parasitoses Intestinais",
    description: "As parasitoses intestinais são infecções causadas por vermes ou protozoários, que afetam o sistema digestivo, causando sintomas como dor abdominal, diarreia e cansaço excessivo.",
    video_link: "https://youtu.be/gwT9vMsg4kk?feature=shared",
    pdf_link: "pdf/Parasitones Intestinais.pdf",
    image: "images/ParasitosesIntestinais.jpg"
  },
  {
    title: "Ansiedade",
    description: "A ansiedade é uma condição emocional caracterizada por sentimentos de preocupação, medo e nervosismo, que pode afetar o bem-estar e a qualidade de vida de quem sofre com ela.",
    video_link: "https://youtu.be/BvlyS0I9HXI?feature=shared",
    pdf_link: "pdf/Transtornos de Ansiedade.pdf",
    image: "images/Ansiedade.jpg"
  },
  {
    title: "Depressão",
    description: "A depressão é um transtorno emocional que causa tristeza persistente, perda de interesse nas atividades diárias e afeta o equilíbrio mental e físico, prejudicando o bem-estar geral.",
    video_link: "https://youtu.be/kWVZ4F05avg?feature=shared",
    pdf_link: "pdf/Depressão.pdf",
    image: "images/Depressao.jpg"
  },
  {
    title: "Esteatose Hepática",
    description: "A esteatose hepática é o acúmulo excessivo de gordura no fígado, que pode levar a inflamação e danos ao órgão, sendo frequentemente associada a fatores como obesidade e alcoolismo.",
    video_link: "https://youtu.be/WHHHYUwJQZY?feature=shared",
    pdf_link: "pdf/EsteatoseHepatica.pdf",
    image: "images/esteatose.jpg"
  },
  {
    title: "Tabagismo",
    description: "O tabagismo é a dependência do uso do tabaco, geralmente através do cigarro, que pode causar danos à saúde, aumentando o risco de doenças respiratórias, cardiovasculares e câncer.",
    video_link: "https://youtu.be/cZ-wHIEWMWY?feature=shared",
    pdf_link: "pdf/Tabagismo.pdf",
    image: "images/Tabagismo.jpg"
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