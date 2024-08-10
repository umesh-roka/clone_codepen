import React, { useEffect, useState } from 'react';
import { useGetAllCodeQuery, } from './Api/codeApi';
import { useNavigate } from 'react-router';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Allcodes = ({sidebarExpanded}) => {
  const nav = useNavigate();
  const [active, setActive] = useState(1);


  
  const { data, error, isLoading } = useGetAllCodeQuery({  page: active });
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
     
     <div className="grid  sm:grid-cols-1 lg:grid-cols-2 justify-center items-center lg:w-[100%] gap-8 p-4">

        {data?.data?.map(({ output, title, _id }) => (
         <div key={_id} className={`flex flex-col items-center p-4 border border-gray-300 rounded-lg ${sidebarExpanded ? 'sm:w-[230px] ': 'sm:w-[330px]'}  lg:w-[550px]  shadow-md`}>

            <div className="w-full h-[300px] bg-white">
              <iframe className=''  srcDoc={output} width="100%" height="100%" title={`output-${_id} `} />
            </div>

            <button onClick={() => nav(`codedit/${_id}`)}>
              <h2 className="text-xl mt-3 font-bold mb-4 uppercase">{title} </h2>
            </button>
          </div>
        ))}
      </div>
      <CircularPagination data={data} active={active} setActive={setActive} />
    </div>
  );
};

export default Allcodes;




export function CircularPagination({ data, active, setActive }) {

  const total = data.total;
  const numShow = Math.ceil(total /4);

  const getItemProps = (index) =>
  ({
    variant: active === index ? "filled" : "text",
    color: "white",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 2) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };



  return (
    <div className="flex gap-4 p-5 lg:ml-[450px]">
      <Button
        variant="text"
        className="flex items-center gap-2 hover:bg-white  bg-white rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> <span className='sm:hidden'>Previous</span>
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(numShow).keys()].map((c) => {
          return <IconButton key={c + 1} {...getItemProps(c + 1)}>{c + 1}</IconButton>;
        })}


      </div>
      <Button
        variant="text"
        className=" flex  items-center gap-2 hover:bg-white  bg-white rounded-full"
        onClick={next}
        disabled={active === numShow}
      >
        <span className='sm:hidden'>Next</span>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}