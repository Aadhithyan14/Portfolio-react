import React,{useRef} from 'react'
// import facebookIcon from '../../assets/'
import './contact.css'
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pm5xwwi', 'template_kgpliii', form.current, 'eYfZvBoisNcqCgfVf')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent')
          }, (error) => {
              console.log(error.text);
              alert('Error sending email');

          });
      };

  return (
<section className='contactPage'>
enecccbklknlbefkdvdeveuhlvgllruuddjbrluddfug

<div id='contact'>
    <h1 className='contactPageTile'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form beloow to discuss any work opportunities </span>

    <form className='conatForm' ref={form} onSubmit={sendEmail}>
<input type='text' className='name' name='from_name' placeholder='Your Name'/>
<input type='email' className='email'  name='from_Email'placeholder='Your Email'/>
<textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>

<br/>
<button type='submit' className='submitBtn' value='send'>Submit</button>
<div className='links'>

    <img src='' alt='' className=''/>
    <img src='' alt='' className=''/>
    <img src='' alt='' className=''/>
    <img src='' alt='' className=''/>

</div>
    </form>

</div>


</section>


)
}

export default Contact;