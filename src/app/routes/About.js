import React from 'react'
import HeroImage from './../components/HeroImage'
import Header from './../components/Header'
import Footer from '../components/Footer'
import Photo from '../../img/my-photo.png'
import Education_timeline from '../../img/timeline-education.svg'
import Job_timeline from '../../img/job-timeline.svg'
import Icon_location from '../../img/location.svg'
import Icon_calendar from '../../img/calendar.svg'

const About = (props) => {


  const skills = ['JavaScript', 'React', 'ReactNative', 'Redux', 'Node.js', 'MongoDB', 'PHP', 'MySQL', 'HTML', 'ReactRouter', 'SASS', 'Gulp', 'Webpack']
  const education = [
    {
      title_1: 'KUBAN STATE UNIVERSITY',
      title_2: 'Bachelor of Applied Informatics',
      date_exp: '2011-2015', 
      location: 'Russia, Krasnodar'
    },
    {
      title_1: 'VYSOKÁ ŠKOLA FINANČNÍ A SPRÁVNÍ',
      title_2: 'Master of Marketing Communication',
      date_exp: '2018-2020', 
      location: 'Czech Republic, Prague'
    }
  ]

  const job = [
    {
      title_1: 'SQL DEVELOPER',
      title_2: 'OOO "ITM"',
      date_exp: '1/2015 - 12/2017', 
      location: 'Russia, Krasnodar',
      detail_list: [
        'Software development for a wholesale and retail company',
        'Database development Firebird SQL',
        'Software development for Portable Data Terminal on TSDserver and ZOPEserver (Python, JavaScript)'
      ]
    },
    {
      title_1: 'WEB DEVELOPER',
      title_2: 'DevCom, spol. s r.o.',
      date_exp: '3/2019 - 7/2019', 
      location: 'Czech Republic, Prague',
      detail_list: [
        'Development of web pages for internal use',
        'Database development MySQL',
        'PHP (Import/Export files by Phpspreadsheet, connect to DB)',
        'Development of the interface part (JavaScript, jQuery, CSS, HTML)'
      ]
    },
    {
      title_1: 'FRONTEND DEVELOPER',
      title_2: 'Actum, s.r.o.',
      date_exp: '8/2019 - 4/2020', 
      location: 'Czech Republic, Prague',
      detail_list: [
        'Development SPA on React',
        'Development of business applications for use with Sitecore',
        'Participation in internal projects of the company for the development of PWA applications'
      ]
    }
  ]

  return (
    <div className="main-container">
      {/* <HeroImage history={props.history}/> */}
      <Header history={props.history} pageActive="about"/>

      <div className="about-page">

        <div className="title-outer">
          <div className="title-inner">
            <span>Information</span>
          </div>
        </div>

        <div className="info-container">
           <div className="info-container__outer">
              <div className="info-container__inner">
                <p className="rich-text rich-text__right">Hello.<br />I am currently working as frontend developer and prefer not to stop and constantly learn new technologies. It is always important for me to write clear and clean code and reusable components. I have 5 years of experience in programming, of which 2+ in web programming.</p>
                <div className="rich-text rich-text__left">
                  <p><b>Citizenship:</b> Russia, Krasnodar</p>
                  <p><b>Residence:</b> Czech Republic, Prague</p>
                  <p><b>Languages:</b> 
                  <ul>
                    <li>English: Intermediate</li>  
                    <li>Czech: Upper-Intermediate</li>  
                    <li>Russian: Proficiency</li>  
                  </ul> 
                  </p>
                  <p><b>Skills:</b> 
                  {skills.map(item => <p className="skill-point">{item}</p>)}
                  </p>
                </div>
              </div>
              <img className="info-container__img" src={Photo} alt="Girl in a jacket" />
           </div>
        </div>

        <div className="title-outer">
          <div className="title-inner">
            <span>Education</span>
          </div>
        </div>


        <div className="timeline-container">
          <div className="timeline-container__inner">
            <div className="job-list">

            {education.map(item => (
                <div className="job-list__inner">
                  <h5 className="job-list__title-1">{item.title_1}</h5>
                  <h6 className="job-list__title-2">{item.title_2}</h6>
                  <div className="job-list__expired">
                    <Icon_calendar /> <span>{item.date_exp}</span>
                    <Icon_location /> <span>{item.location}</span>
                  </div>
                </div>
              ))}

              </div>

              <div className="job-timeline">
                <Education_timeline />
              </div>
            </div>
        </div>




        <div className="title-outer">
          <div className="title-inner">
            <span>Work experience</span>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-container__inner">
            <div className="job-list">

            {job.map(item => (
                <div className="job-list__inner">
                  <h5 className="job-list__title-1">{item.title_1}</h5>
                  <h6 className="job-list__title-2">{item.title_2}</h6>
                  <div className="job-list__expired">
                    <Icon_calendar /> <span>{item.date_exp}</span>
                    <Icon_location /> <span>{item.location}</span>
                  </div>
                  <ul className="job-list__list">
                    {item.detail_list.map(detail => <li>{detail}</li>)}
                  </ul>
                </div>
              ))}

              </div>

              <div className="job-timeline">
                <Job_timeline />
              </div>
            </div>
        </div>

      <Footer /> 

    </div>
    </div>
  );
}

export default About
