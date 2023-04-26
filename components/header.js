import React, { useState } from 'react'



const  Header = (props) => {
    
    
   
    

  return (
    <div class="flex-1 max-w-7xl ml-60">
        

        <div class="flex  bg-[#EDF9F9] border border-gray-200 shadow-md ">
           
            <div class="flex-1 w-auto p-4">
                <a href="#">
                    <h4 class="mb-2 text-md font-md tracking-tight text-gray-900 dark:text-black" >
                        {props.Title}
             </h4>
                </a>
                <p class="mb-2 font-normal text-gray-700 dark:text-gray-800">2022-01-22</p>
                
            </div>

            <div class="flex-1 w-auto m-auto">

                <button type = "button" class="bg-transparent text-black hover:bg-[#D9ACF5] text-200 font-md hover:text-white py-1 px-2 border border-bg-[#D9ACF5] hover:border-transparent rounded " onClick={props.onClick}>{props.buttonTitle}</button>
            </div>
            
        </div>

        

    </div> 
  )
}

export default Header 
