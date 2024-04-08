import "./ContactFormStyle.css"

function ContactForm() {
  return (
    <div className="contactForm">
      <h1>Send a Message To Us!</h1>
      <form action="">
        <input type="text" name="" required placeholder="Name" id="" />
        <input type="email" name="" required placeholder="Email" id="" />
        <input type="text" name="" required placeholder="Subject" id="" />
        <textarea name="" required placeholder="Message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
