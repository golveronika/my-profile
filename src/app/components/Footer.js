import React from 'react'
import Icon_PDF from '../../img/pdf-icon.svg'

const Footer = () => {

  return (
    <footer className="footer">
        <div className="credits">This page made by me </div>
        <div >
            <a className="pdf-link"href="#">Download in pdf <Icon_PDF /></a>
        </div>
    </footer>
  );
}

export default Footer
