import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="py-5 px-10 rounded-[10px] mb-5 relative">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image className="object-contain opacity-20" src="/astronaut.png" alt="" fill />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3>
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[var(--textSoft)] font-medium text-xs">Takes 4 minutes to learn</span>
          <p className="text-[var(--textSoft)] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2.5 flex items-center gap-2.5 w-max text-white border-none rounded-[5px] cursor-pointer bg-[var(--bgPurple)]">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;