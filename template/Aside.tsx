import Navbar from "@/components/navbar/Navbar";

const Aside = () => {
  return (
    <aside className="bg-second rounded-2xl w-full max-w-52 h-full">
      <div className="pt-7 pb-2 px-7 text-2xs text-third capitalize font-bold">
        main menu
      </div>
      <Navbar />
    </aside>
  );
};

export default Aside;
