import Image from "next/image";
import tbr_logo from "~/img/trabalha-brasil-logo.png";
export default function Experience() {
  const icons_stacks = [
    "https://raw.githubusercontent.com/LeonardoMachado30/LeonardoMachado30/bfc7f570c438c3e37eb489a1a587163eecaf238a/html.svg",
    "https://raw.githubusercontent.com/LeonardoMachado30/LeonardoMachado30/bfc7f570c438c3e37eb489a1a587163eecaf238a/css3.svg",
    "https://raw.githubusercontent.com/LeonardoMachado30/LeonardoMachado30/bfc7f570c438c3e37eb489a1a587163eecaf238a/javascript.svg",
    "https://raw.githubusercontent.com/LeonardoMachado30/LeonardoMachado30/bfc7f570c438c3e37eb489a1a587163eecaf238a/jquery.svg",
    "https://raw.githubusercontent.com/LeonardoMachado30/LeonardoMachado30/bfc7f570c438c3e37eb489a1a587163eecaf238a/csharp.svg",
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className="font-bold text-3xl mb-4">EXPERIENCIAS</h3>
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col">
          <h4 className="font-bold">TRABALHA BRASIL</h4>
          <p>Desenvolvedor full-stack | Home office | PJ</p>
          <p>06/2021 até 01/2023 - 1 ano e 8 meses</p>
          <div className="flex gap-1 flex-wrap">
            {icons_stacks.map((icon) => {
              const name = icon.match("/([^/]+).svg$") || "";
              console.log(name);
              return (
                <Image
                  key={name[1]}
                  src={icon}
                  alt="icone html"
                  width="80"
                  height="20"
                  //   style={{ width: "auto !important", height: "auto" }}
                />
              );
            })}
          </div>
          {/* <p className="text-sm">
            Experiência focada no desenvolvimento front-end. Influenciando mais
            de 10 milhões de pessoas em um sistema decandidaturas e
            gerenciamento de vagas. Experiência nas principais tecnologias do
            mercado como HTML,CSS/SASS, JQuery e C# para a construção de paginas
            websites. Experiência com praticas de SEO, acessibilidades,
            timização emonetização. Experiência da metodologia Ágil utilizando a
            plataforma AzureDevOps. Utilizando C# com Razor/Blazor, Entity
            Framework, Postegree,MongoDB, Redis, SOLR.
          </p> */}
        </div>
        <Image src={tbr_logo} alt="trabalha brasil logo" />
      </div>
    </div>
  );
}
