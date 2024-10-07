// 'use client'
// import React, { useEffect, useState} from "react"
// import Terminal from 'react-terminal-ui';
// import { emailts } from "./lib/emailJs";

// export interface email  { 
//     email: string | null,
//     message:string|null
// }
// let  validateEmail=(email:string)=> {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   }
// export const Emailsender = () => {
//     const [info, setinf] = useState<email>({
//         email: null,
//         message:null,
//     }) 
//     const [terminalLineData, setTerminalLineData] = useState<JSX.Element>();
//     const [pr,setpr]=useState<string>('enter your email :')

//     let x = (input: string | any) => {
//         if (input === '') {
            

//             setTerminalLineData(e =>
//                 <>
//                     {e}
//                     <div className="text-center">enter a correct email</div>
//                 </>
//             )
            
            
//         }
//         else {
//             if (validateEmail(input)) {
//                 setTerminalLineData(e =>
//                     <>
//                         {e}
//                         <div >enail : {input}</div>
//                     </>
//                 )
//                 setinf((e) => ({
//                     ...e,
//                     email: input
//                 }))
//                 setpr(`enter your subject : `)

//             }
//             else {

//                 setTerminalLineData(e =>
//                     <>
//                         {e}
//                         <div className="text-danger">enter a correct email</div>
//                     </>
//                 )

//             }
//         }
//     }
//     useEffect(() => { 
//         async function fetchData() {
//           if (info.message) {
//             console.log(info);
//             try {
//                 const res = await emailts(info);
                
//                 if ((res as Response).status === 200) {
//                     setTerminalLineData(e =>
//                         <>
//                             {e}
//                             <div style={{color:'#00ff00'}}>email has been sent successfully </div>
//                         </>
//                     )
//                     return 1 
//                 } else {
//                     // Handle other status codes (e.g., error responses)
//                     setTerminalLineData(e =>
//                         <>
//                             {e}
//                             <div className="text-danger">Received a non-200 status code: {(res as Response).status} </div>
//                         </>
//                     )
//                     return;
//                 }
//             } catch (error) {
//                 // Handle the error
//                 console.log(error, 22)
//                 if ((error as Response).status) { 
//                     setTerminalLineData(e =>
//                         <>
//                             {e}
//                             <div className="text-danger"> unfortunately you can't send message rightnow by the way you can contact us any time at <span className="text-warning">thisisforworkbyme@outlook.com</span>  </div>
//                         </>
//                     )
//                 }
//                 return 0
//             }
//           }
//         }
      
//         fetchData(); // Call the async function
//       }, [info]);
      
//     let y = (input: string) => { 
//         if (input.length < 15) {
//             setTerminalLineData(e =>
//                 <>
//                     {e}
//                     <div className="text-danger">The message should contain more than 15 characters . </div>
//                 </>
//             )
//         }
//         else { 
//             setinf((e) => ({
//                 ...e,
//                 message:input
//             }))
            
//             setpr("")
//         }

//     }
//     let z = (input:string) => { 
//         setTerminalLineData(e =>
//             <>
//                 {e}
//                 <div style={{color:'#00ff00'}}>OK </div>
//             </>
//         ) 
//     }
//     return (
//         <div className="h-100 " style={{ backgroundColor: '#070606' }}>
         
//             <div className="h-100 container d-flex justify-content-center align-items-center">
                
//                 <Terminal prompt={pr} name='send us a message' height="300px" onInput={terminalInput =>
//                 {
//                     if (!(info.email)) { x(terminalInput) } else if (!(info.message)) {
//                         y(terminalInput)
//                     }
//                     else { 
//                         z(terminalInput)
//                     }
//                 }
//                 }>
//                     { terminalLineData}
//       </Terminal>
//                 </div>
            

//     </div>
// )
// }
