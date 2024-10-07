

// import emailjs from '@emailjs/browser';

// import { email } from '../Email';  
// export const emailts = (x: email) => { 
//     return new Promise((resolve,reject)=> { 
    
//         const sreviceid = 'service_r432pnq'
//         const tempoid = 'template_9ol3wuf'
//         const pub='ANS8iZTN8s6pWNfnR'
//         const form = document.createElement('form');
        
//     // Add input fields for email and message
//     const emailInput = document.createElement('input');
//     emailInput.type = 'email';
//     emailInput.name = 'user_email';
//     emailInput.value = x.email || '';
//     form.appendChild(emailInput);
  
//     const messageInput = document.createElement('textarea');
//     messageInput.name = 'message';
//     messageInput.value = x.message || '';
//     form.appendChild(messageInput);
    
//     emailjs.sendForm(sreviceid, tempoid, form, pub)
//     .then((result) => {
//         // console.log(result.text);
//         resolve(result)
//     }, (error) => {
//         // console.log(error.text);
//         reject(error)
//     });
// })
// };

