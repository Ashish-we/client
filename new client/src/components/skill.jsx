import React from "react";
import { AiOutlineCopyrightCircle, AiOutlineArrowDown } from "react-icons/ai";

const Skill = () => {
  return (
    <div className="font-poppins">
      <div className="text-center ">
        <h2 className="text-5xl mt-16 font-semibold tracking-wider">
          What are your skills?
        </h2>
        <p className="text-xl mt-6 text-gray-500">
          What skills do you think you have for intern?
        </p>
      </div>
      <div className="flex justify-center mt-6 ">
        <div className="block max-w-sm mx-1 rounded-lg bg-[#2A0C4E] text-center shadow-lg ">
          <div className=" py-3 px-6  ">
            <input
              type="checkbox"
              className="flex justify-start h-4 w-4 rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-center py-1">
            <AiOutlineCopyrightCircle className="text-white" size={30} />
          </div>
          <div className="pb-1 px-6 text-white ">Frontend</div>
        </div>

        <div className="block max-w-sm rounded-lg mx-1 bg-[#2A0C4E] text-center shadow-lg ">
          <div className=" py-3 px-6  ">
            <input
              type="checkbox"
              className="flex justify-start h-4 w-4 rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-center py-1">
            <AiOutlineCopyrightCircle className="text-white" size={30} />
          </div>
          <div className="pb-1 px-6 text-white ">Backend</div>
        </div>

        <div className="block max-w-sm rounded-lg mx-1 bg-[#2A0C4E] text-center shadow-lg ">
          <div className=" py-3 px-6  ">
            <input
              type="checkbox"
              className="flex justify-start h-4 w-4 rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-center py-1">
            <AiOutlineCopyrightCircle className="text-white" size={30} />
          </div>
          <div className="pb-1 px-6 text-white ">Security</div>
        </div>

        <div className="block max-w-sm rounded-lg mx-1 bg-[#2A0C4E] text-center shadow-lg ">
          <div className=" py-3 px-6  ">
            <input
              type="checkbox"
              className="flex justify-start h-4 w-4 rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-center py-1">
            <AiOutlineCopyrightCircle className="text-white" size={30} />
          </div>
          <div className="pb-1 px-6 text-white ">Frontend</div>
        </div>

        <div className="block max-w-sm rounded-lg mx-1 bg-[#2A0C4E] text-center shadow-lg ">
          <div className=" py-3 px-6  ">
            <input
              type="checkbox"
              className="flex justify-start h-4 w-4 rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-center py-1">
            <AiOutlineCopyrightCircle className="text-white" size={30} />
          </div>
          <div className="pb-1 px-6 text-white ">Backend</div>
        </div>

        <div className="block max-w-sm rounded-lg mx-1 bg-[#2A0C4E] text-center shadow-lg ">
          <div className=" py-3 px-6  ">
            <input
              type="checkbox"
              className="flex justify-start h-4 w-4 rounded-lg bg-transparent"
            />
          </div>
          <div className="flex justify-center py-1">
            <AiOutlineCopyrightCircle className="text-white" size={30} />
          </div>
          <div className="pb-1 px-6 text-white ">Security</div>
        </div>
      </div>

      <div className="text-center mt-10 flex justify-center  ">
        
          <button className="text-xl text-white bg-[#2F2963] px-12  py-2 rounded-full ">See More Skills</button>
        
      </div>

      <div className="flex justify-center mt-16 ">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-gray-100">
          <div className="flex justify-center">
            <div className="text-3xl font-bold text-black">Internship</div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600">
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa.
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa.
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa.
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa.
              Aliquam a tristique sapien, nec bibendum urna. 
            </div>
          </div>

          <div  className="flex justify-center text-lg cursor-pointer text-black">
                   
                  <span>Signup to see more</span> 
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
