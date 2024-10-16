export default function ButtonMorph({ children }: { children: string }) {
  return (
    <button className="h-16 max-md:w-[330px] max-md:text-sm w-[480px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl border border-white border-opacity-20 shadow-lg text-white   hover:bg-opacity-30 transition-all duration-300">
      {children}
    </button>
  );
}
