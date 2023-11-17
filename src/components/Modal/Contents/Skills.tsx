import skills, { PropsChildren } from "@/models/Skills";

type PropsCard = {
  props: PropsChildren[];
};

const ContainerCards = ({ title = "", children = <></> }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h4 className="text-lg font-bold mb-4">{title}</h4>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
};

const Card = ({ props }: PropsCard) => {
  return (
    <>
      {props &&
        props.map(({ name, bgColor }, i) => (
          <div
            key={i}
            className={`px-4 py-2 ${bgColor} max-w-max min-w-[100px] text-center font-bold text-white text-lg`}
          >
            {name}
          </div>
        ))}
    </>
  );
};

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center px-8">
      <h3 className="font-bold text-3xl mb-4">EXPERIENCIAS</h3>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <ContainerCards title="FRONT-END">
          <Card props={skills.front} />
        </ContainerCards>

        <ContainerCards title="BACK-END">
          <Card props={skills.back} />
        </ContainerCards>

        <ContainerCards title="OUTROS">
          <Card props={skills.other} />
        </ContainerCards>
      </div>
    </div>
  );
}
