import React from 'react';

const EmailSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailDTO = {
      subject: document.getElementById('subject').value,
      tomail: document.getElementById('tomail').value,
      message: document.getElementById('message').value
    };

    fetch('http://localhost:8080/api/v1/emailSend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailDTO),
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Failed to send email');
        }
      })
      .then(data => {
        console.log(data);
        alert('E-mail Sent successfully.');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleBackButtonClick = () => {
    window.history.back(); // This will go back to the previous page in the browser's history.
  };

  return (
    <div>
      <link rel="stylesheet" href="style2.css" />

      <section className="container">
        <header>E-mail</header>
        <form id="emailForm" className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>To Email</label>
            <input type="text" id="tomail" placeholder="Enter The Recipient Email" />
          </div>
          <div className="input-box">
            <label>Subject</label>
            <input type="text" id="subject" placeholder="Enter The Subject" />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter Message Here. . . . . . . . ."></textarea><br/><br/>
          </div>
          <button type="submit">Send</button>
          <button id="backButton" onClick={handleBackButtonClick}>Back</button>
        </form>
      </section>
    </div>
  );
};

export default EmailSender;
