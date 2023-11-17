export type PropsChildren = { name: string; bgColor: string };

type Props = {
  front: PropsChildren[];
  back: PropsChildren[];
  other: PropsChildren[];
};

const skills: Props = {
  front: [
    {
      name: "JAVASCRIPT",
      bgColor: "bg-[#f7e025]",
    },
    {
      name: "REACTJS",
      bgColor: "bg-[#08ddff]",
    },
    {
      name: "JQUERY",
      bgColor: "bg-[#28afe3]",
    },
  ],
  back: [
    {
      name: "NODE",
      bgColor: "bg-[#93c745]",
    },
    {
      name: "C#",
      bgColor: "bg-[#6c287d]",
    },
    {
      name: "PHP",
      bgColor: "bg-[#4d588e]",
    },
    {
      name: "NEXTJS",
      bgColor: "bg-[#000000]",
    },
    {
      name: "TYPESCRIPT",
      bgColor: "bg-[#377cc8]",
    },
  ],
  other: [
    {
      name: "FIGMA",
      bgColor: "bg-[#000000]",
    },
    {
      name: "CANVA",
      bgColor: "bg-[#08c5cd]",
    },
    {
      name: "GIMP",
      bgColor: "bg-[#28afe3]",
    },
    {
      name: "SONY VEGAS 19",
      bgColor: "bg-[#466fff]",
    },
  ],
};

export default skills;
