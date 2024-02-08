import React from 'react'
import {BiMessageDetail} from 'react-icons/bi'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import getInTouch from "../Assests/inTouch.jpg"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zil5oso', 'template_zdpsdcf', form.current, 'i-P7o958HGHVlVjeV')

    
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
  <section className='contact'>
    <h2>Contact US</h2>
    <div className='container contact_container'>
      <div className='image-con'>
        <img src = {getInTouch} />
    </div>
      <form ref={form} onSubmit={sendEmail}>
        
        <input type="text" name='name' placeholder='Your Full Name' className='form-input' required/>
        <input type="email" name='email' placeholder='Your Email' className='form-input' required/>
        {/* <textarea type="message" name='message' row='7' placeholder='Your Message' required></textarea> */}
        <textarea name="message" placeholder='Your Message' className='form-input-message' required/>
        <div className='btn-layout-2'>
        <button type='submit' className='btn-primary-1'>Send Message</button>
        </div>
      </form>

    </div>
  </section>
  )
}

export default Contact
