import Navbar from "@/components/navbar/Navbar";

const Aside = () => {
  return (
    <aside className="bg-second rounded-2xl w-16 tablet:w-48 h-full flex-shrink-0">
      <div className="pt-7 pb-2 px-7 hidden tablet:block text-2xs text-third capitalize font-bold">
        main menu
      </div>
      <Navbar />
    </aside>
  );
};

export default Aside;
