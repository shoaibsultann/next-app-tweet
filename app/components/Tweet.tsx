import Link from "next/link";
import React from "react";
import {GoKebabHorizontal} from "react-icons/go";
import {FaRegComment} from "react-icons/fa";
import {FaRetweet} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import {FiBarChart2} from "react-icons/fi";

export default function Tweet() {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-slate-100 flex">
      <img
        className="h-12 w-12 rounded-full mr-2"
        src="/profile.jpg"
        alt="profile picture"
      />
      <div className="w-full">
      <div className="flex">
      <div> 
        <Link href={"https://twitter.com/shoaib_sultann"}>
        <strong >Shoaib Sultan</strong>
        <span className="text-gray-500 mx-1">@shoaib_sultann</span> 
        </Link>
    
        <span className="text-gray-500 mr-1">&middot;</span>
        <span className="text-gray-500 mr-1">March 22</span>
      </div>
        <div className="ml-auto">
        <GoKebabHorizontal/>
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, quaerat.
      </div>
      <div className="mt-2 flex justify-between">

      <div className="flex items-center  text-gray-600">
          <FaRegComment className="mr-2"/>
          <span>215</span>
        </div>

        <div className="flex items-center  text-gray-600">
          <FaRetweet className="mr-2"/>
          <span>19</span>
        </div>

        <div className="flex items-center  text-gray-600">
          <AiOutlineHeart className="mr-2"/>
          <span>17</span>
        </div>

        <div className="flex items-center  text-gray-600">
          <BsUpload className="mr-2"/>
        
        </div>

        <div className="flex items-center  text-gray-600">
          <FiBarChart2 className="mr-2"/>
          
        </div>
      </div>
      </div>
    </div>
  );
}
