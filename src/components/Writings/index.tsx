export default function Writings({ showWriting }) {
  return (
    <div
      className={`fixed w-full h-full backdrop-blur-sm bg-black/80 mx-auto z-50`}
    >
      <div
        className={`text-7xl text-white w-full h-full flex justify-center items-center font-bold ${showWriting}`}
      >
        OLÀ MEU NOME E FLÀVIO
      </div>
    </div>
  );
}
