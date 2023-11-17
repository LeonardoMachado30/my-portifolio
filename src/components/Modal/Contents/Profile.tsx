import Image from "next/image";
import profile from "~/img/Profile.png";

export default function Profile() {
  return (
    <div className="flex flex-col gap-12 text-center justify-center items-center">
      <Image
        src={profile}
        alt="imagem de perfil"
        width="375"
        height="375"
        className="!w-1/2 !h-full"
      />
      <div className="flex flex-col text-center gap-4">
        <h3 className="font-bold text-2xl">MINHA HISTORIA</h3>
        <p className="text-justify overflow-y-auto h-[50vh] md:h-[40vh] md:text-base text-sm md:p-4 p-2 float-left overscroll-contain">
          Durante minha jornada na área de tecnologia, adquiri experiência em
          reparos de dispositivos eletrônicos, como celulares, computadores e
          notebooks, como freelancer. Realizei estágio como suporte técnico no
          colégio Objetivo, ajudando e orientando os professores e colaboradores
          em suas demandas, mantendo a rede interna de comunicação funcional,
          tal como, servidores, cabeamento e dispositivos. Trabalhei como
          desenvolvedor no Banco Nacional de Empregos, onde pude me aprofundar
          no universo da tecnologia, criando documentações utilizando o modelo
          UML, aplicando os principais patterns, como SOLID, Clean code, TDD e
          MVC. Construindo websites interativos, otimizados e acessíveis,
          conseguindo impactar mais de 10 milhões de pessoa, desenvolvendo,
          landing pages, fluxos complexos de cadastro, telas de dashboards com
          gráficos, fluxos de pagamentos e muito mais.Atualmente, estou a
          aprender NodeJs, NestJs e TypeORM para me especializar no ecossistema
          Javascript.
        </p>
      </div>
    </div>
  );
}
