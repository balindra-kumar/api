import React from 'react';

const Mail = () => {
    const mailSend = (e)=>{

        e.preventDefault();
        const to = 'balindra2023@gmail.com';
        const subject = "Subject is here";
        const body = "Welcome to body"
        const mailtoLink = `mail.google.com:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }
  
  return (
    <div>
      <h2>Mail...</h2>
      <button>Send Email</button> {/* Button to trigger email sending */}
      <a href="mailto:balindra2023@gmail.com">Send Mail</a>
      <form id="emailForm" onSubmit={mailSend}>
  <div>
    <label for="to">To:</label>
    <input type="email" id="to" name="to" required className='border' />
  </div>
  <div>
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required className='border'/>
  </div>
  <div>
    <label for="body">Body:</label>
    <textarea id="body" name="body" rows="4" cols="50" required className='border'></textarea>
  </div>
  <button type="submit" className='border'>Send Email</button>
</form>
    </div>
  );
};

export default Mail;
