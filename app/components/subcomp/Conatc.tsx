'use client'
import React from "react";

export const Con = () => { 
    return (
        <div style={{ backgroundColor: '#070606' }} className="h-screen w-full flex justify-center items-center">
            <div className="h-3/4 flex justify-center items-center">
                <h4 id="ts" className="p-2 text-white text-center uppercase">
                    <span className="text-green-500 text-2xl">Contact:</span>
                    <a 
                        href="mailto:thisisforworkbyme@outlook.com" 
                        className="text-white no-underline text-2xl text-center"
                    >
                        Hunterforuniversity@gmail.com
                    </a>
                </h4>    
            </div>
        </div>
    )
}
