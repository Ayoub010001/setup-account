'use client'
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"

// Component
import AddCategory from "@/components/AddCategory";
import RestaurantInfo from "@/components/RestaurantInfo";
import RestaurantCover from "@/components/RestaurantCover";
import Pagination from "@/components/Pagination";
export default function Home() {
 
  interface restaurant{
    name:string,
    description:string,
    adress:string,
    currency:string,
    restLogo:string,
    restCover:string,
    categories:string[]
  } 
  const defaultRestInfo: restaurant = {
    name: "",
    description: "",
    adress: "",
    currency: "",
    restLogo: "",
    restCover: "",
    categories: [],
  };
  const [restInfo, setRestInfo] = useState<restaurant>(defaultRestInfo);


  function handleChange(value: string, type:string) {
      setRestInfo(oldState => ({
        ...oldState,
        [type]: (type === "categories") ? [...oldState.categories, value] :value
      }));
    console.log(restInfo)
  }

  const handleCurrencyChange = (newCurrency: string) => {
    setRestInfo(prevState => ({
      ...prevState,
      currency: newCurrency
    }));
    console.log(restInfo)
  }

  const init:number = 1;
  const [currentPage, setCurrentPage]= useState<number>(init);


  function handleNextPage(){
      setCurrentPage(prevState =>{
          if(prevState<3)
              return prevState+1
          return prevState
      });
  }
  function handlePrevPage(){
      setCurrentPage(prevState =>{
        if(prevState>1)
            return prevState-1
        return prevState
    })
  }

  const renderComponent = () => {
    switch (currentPage) {
      case 1:
        return <RestaurantInfo restInfo={restInfo}
                               handleChange={handleChange}
                               handleCurrencyChange={handleCurrencyChange}/>;
      case 2:
        return <RestaurantCover restInfo={restInfo}
                                handleChange={handleChange}
                                />;
      case 3:
        return <AddCategory restInfo={restInfo}
                            handleChange={handleChange}/>;
      default:
        return null;
    }
  };
  
  console.log(currentPage)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="flex flex-col gap-2 px-12 py-6 ">
        <div className="flex flex-col ms- h-10 relative w-[80%] m-auto">
          <Pagination pageNumber={1} currentPage={currentPage}/>
          <Pagination pageNumber={2} currentPage={currentPage}/>
          <Pagination pageNumber={3} currentPage={currentPage}/>
          <Progress value={33*currentPage} className="w-full my-4 m-auto"/>
        </div>
        <div className="flex justify-between gap-2">
          <div className=" w-[250px]">
            <img src="/mockup.png" alt="mockup" className="w-100" />
          </div>
          <div className="flex flex-col justify-between gap-4 w-[340px]">
            {renderComponent()}
            {/* <RestaurantInfo restInfo={restInfo}
                          handleChange={handleChange}
                          handleCurrencyChange={handleCurrencyChange}/> */}
            {/* <RestaurantCover restInfo={restInfo}
                          handleChange={handleChange}
                        /> */}
          
            {/* <AddCategory restInfo={restInfo}
                        handleChange={handleChange}/> */}
            <div className="flex justify-between items-center">
              <p className=" cursor-pointer text-md opacity-80" onClick={handlePrevPage}>Go back</p>
              <Button onClick={handleNextPage}>{currentPage==3?"Finish":"Next step"}</Button>
            </div>
          </div>
        </div>
      </Card> 
    </main>
  );
}
