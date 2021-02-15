import React from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_96cnipr', 'template_6pdnaoj', e.target, 'user_PAjVSDblp1Yy1rIchWACU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-container">
      <div className="form-container">
        <h3>Questions?</h3>
        <h3>Let's connect!</h3>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="first-input">
            <input type="text" placeholder="Name" name="name" required/>
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <input type="text" placeholder="Subject" name="subject" required/>
          </div>
          <div>
            <textarea placeholder="Message" name="message" required/>
          </div>
          <input className="btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}




// import React from 'react';
// // import 'Contact.css';
// import { useForm } from "react-hook-form";

// function Contact() {
//     const { register, handleSubmit, errors } = useForm();
    
//     const onSubmit = (data, r) => {
//       alert(`Thank you for your message from ${data.email}`);
//       const templateId = 'template_l7s9qxd';
//       const serviceID = 'sanghosuh@gmail.com';
//       sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
//       r.target.reset();
//   }


//     return (
//         <div className="ContactForm">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input 
//                     placeholder="name"
//                     name="name" 
//                     ref={
//                         register({ 
//                             required: "Please enter your name", 
//                             maxLength: {
//                                 value: 20,
//                                 message: "Please enter a name with fewer than 20 characters"
//                             } 
//                         })
//                     } 
//                 /><br />
//                 {errors.name && errors.name.message}<br />

//                 <input
//                     placeholder="email"
//                     name="email"
//                     ref={
//                         register({
//                             required: "Please enter an email",
//                             pattern: {
//                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                 message: "invalid email address"
//                             }
//                         })
//                     }
//                 /><br/>
//                 {errors.email && errors.email.message}<br />

//                 <textarea 
//                     placeholder="comment"
//                     name="comment" 
//                     ref={
//                         register({
//                             required: true
//                         })
//                     } 
//                 /><br />
//                 {errors.comment && "oops, you forgot your message!"}<br />

//                 <input type="submit" />
//             </form>
//         </div>
//     );
// }

// export default Contact;