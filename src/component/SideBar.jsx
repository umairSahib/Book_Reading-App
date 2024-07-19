import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="sidebar w-1/4 pl-8 bg-black">
        <div className="pt-12">
          <img src="https://placehold.co/200x100" alt="logo" />
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa fa-house text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">Home</h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa-solid fa-fire-flame-curved text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">Popular</h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa-regular fa-bookmark text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">My Library</h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa-regular fa-heart text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">Favourite</h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa fa-crown text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">
            VIP Subscriptions
          </h2>
        </div>
        <div className="border border-b-1 border-gray-500 pl-4 pr-4 mt-8 "></div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa fa-gear text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">Settings</h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa fa-circle-info text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">Help</h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i class="fa fa-right-from-bracket text-gray-500"></i>
          <h2 className="text-gray-500 font-roboto text-base">Logout</h2>
        </div>
      </div>
    </>
  );
};

export default SideBar;
