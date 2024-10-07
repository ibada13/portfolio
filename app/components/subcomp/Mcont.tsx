'use client'
import React from "react"
interface conblock { 
    tit: React.ReactElement,
    cont:string|React.ReactElement,
}
export const Modcon = ({tit,cont }:conblock) => { 
    return (
        <div >
            <div className="m-2  d-flex justify-content-start align-items-center text-uppercase">
                {tit}
            </div>
            <div className="text-dark text-center text-uppercase">
              
               
                    {cont }
                
            </div>
        </div>
)
}
