'use client';
import React, { useState, useEffect, FormEvent } from "react";
import './css/cmd.css'
import { commandanswers, commandsList } from "./lib/data";
import { FaArrowLeft ,FaArrowRight} from "react-icons/fa";
interface Command { 
  command: string, 
  output:string,
}
const Terminal = ({setIsHide}:{setIsHide:React.Dispatch<React.SetStateAction<string|null>>}) => {
  const [inputValue, setInputValue] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);

  useEffect(() => {
    const input = document.getElementById('input') as HTMLInputElement;
    const resizeInput = () => {
      input.style.width = `${input.value.length +0.1}ch`; // Slightly adjusted for better spacing
    };


    // Cleanup event listener and interval
    return () => {
      input.removeEventListener('input', resizeInput);
      // clearInterval(animation);
    };
  }, []);

  const processCommand = (input:string) => {
    let output = "";

    switch (input.toLowerCase() ) {
      case "help":
        output = "aviable commands !";
        for (const command in commandsList) {
          output += `${command}  -   ${commandsList[command]}\n`
        }
        // output.trim();
        break;
      case "greet":
        output = "Hello, user!";
        break;
      case "clear":
        setCommands([]);
        return;
      default:
        output = commandanswers[input.toLowerCase()] || `${input} is not recognized as command`;
        if (input.toLowerCase() === "exit") { 
          setTimeout(() => { 
            setIsHide("right")
          },1000)
        }
        break;
    }

    setCommands((prevCommands) => [
      ...prevCommands,
      { command: input, output }
    ]);
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    processCommand(inputValue.trim());
    setInputValue(""); // clear the input
  };
  const focusinput = () => { 
    const input = document.getElementById("input") as HTMLInputElement
    input.focus()
  }
  return (
    <div className="w-[90vw] mx-h-[80vh] h-[80vh] bg-terminal flex text-white  flex-col overflow-y-auto overflow-x-auto rounded-md "
    onClick={focusinput}
    >
      <div className="w-full text-center   flex justify-center text-xl text-gl ">
        <div className="flex-grow uppercase">
          Terminal 
      </div>
        <div className="w-1/6 flex  justify-around items-center">
          <button className="hover:text-red-500 hover:text-2xl transition-all duration-500" onClick={()=>setIsHide("left")}>
        <FaArrowLeft />
        </button>
          <button className="hover:text-red-500 hover:text-2xl transition-all duration-500" onClick={()=>setIsHide("right")}>
            <FaArrowRight />
        </button>

        </div>
      </div>

      <div className="terminal-output w-full h-auto  p-2 overflow-y-auto whitespace-pre-wrap " >
        {commands.map((cmd, index) => (
          <div key={index}>
            <div className="h-auto"><strong>admin@portfolnio:~$ {cmd.command}</strong></div>
            <div>{cmd.output}</div>
          </div>
        ))}
      </div>
      <div className=" w-5/6">
        <form onSubmit={handleSubmit} className="terminal-input-area flex  w-full items-center  ml-2">
          
          <p className="h-full m-auto">admin@portfolio:~$</p>
          
          <input
            type="text"
            className="ml-2 bg-inherit flex-grow w-full min-w-2 text-gl border-none focus:outline-none focus:border-0 focus:ring-0"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
            id="input"
          />
          

        </form>
      </div>
      </div>
  );
};

export default Terminal;
