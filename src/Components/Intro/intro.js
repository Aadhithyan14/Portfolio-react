import React from 'react'
import './intro.css'
import bg from '../../assets/profile.jpeg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/suitcase.png'
const intro = () => {
  return (
<section id='intro'>
    <div className='introContent'>
<span className='hello'>Hello</span>
<span className='introText'>I'm <span className='introName'>Adithyan</span><br/> <span className=''>Full Stack Developer</span> </span>
<p className="introPara" > I'm a skilled Web Designer with experience in Creating a visual applealing <br/> and
 user friendly websites </p>
    <Link><button className='btn'> <img src={btnImg} alt='btnImg' /> Hire Me </button></Link>
    </div>

    <img src={bg} alt='profile' className='bg'/>
</section>

    )
}

export default intro;