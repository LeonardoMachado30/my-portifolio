import Image from "next/image";

type IProps = {
  image: string;
  title: string;
  className: string;
  click: (title: string) => void;
};

export default function Card({ image, title, className, click }: IProps) {
  return (
    <section
      className={`${className} max-w-full bg-white p-4 w-full h-60 flex flex-col justify-center items-center --show-title cursor-pointer`}
      onClick={() => click(title)}
    >
      <Image src={image} alt={title} width="100" height="100" />
      <h2 className="font-bold">{title}</h2>
    </section>
  );
}
