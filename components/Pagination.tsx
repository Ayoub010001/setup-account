import React from 'react'

function Pagination({pageNumber,currentPage}:{ pageNumber: number, currentPage:number }) {
  let percentage:string;
  let current:string = (pageNumber <= currentPage)?"bg-zinc-800 text-slate-100 hover:bg-zinc-950  ":"bg-slate-100 text-zinc-950 hover:bg-slate-200 ";
  switch(pageNumber){
    case 1:
      percentage = "left-0";
      break;
    case 2:
      percentage = "left-[45%]";
      break;
    case 3:
      percentage = "right-0";
      break;
    default:
      percentage = "left-0"
  }


  return (
    <div className={`${percentage} cursor-pointer font-medium absolute z-10 ${current} w-10 h-10 rounded-full flex justify-center items-center text-2xl`}>{pageNumber}</div>
  );
}

export default Pagination