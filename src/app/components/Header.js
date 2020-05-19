import React from 'react'

const Header = ({history, pageActive}) => {

  return (
    <header className="header">
        <a className={`header__link ${pageActive === "about" ? "active" : ''}`} href="#" onClick={() => history.push('/about')}>
            <div>
                About me
            </div>
        </a>
        <a className={`header__link ${pageActive === "projects" ? "active" : ''}`} href="#" onClick={() => history.push('/projects')}>
            <div>
                Playground - projects
            </div>
        </a>
        <a className={`header__link ${pageActive === "contacts" ? "active" : ''}`} href="#" onClick={() => history.push('/contacts')}>
            <div>
                Contacts
            </div>
        </a>
    </header>
  );
}

export default Header