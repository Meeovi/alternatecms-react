
export function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
  <div>
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        @ {date} — <strong><a href="https://www.alternatecms.com">Powered by
            AlternateCMS</a></strong>
      </div>
    </footer>
    <div className="btn-group dropup" style={{float: "right", right: "5px", bottom: "5px", position: "fixed"}}>
      <button type="button" className="btn btn-warning dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false" style={{borderRadius: "30px"}}>
        <i className="fas fa-question-circle"></i>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="https://www.alternatecms.com/docs">Documentation</a></li>
        <li><a className="dropdown-item" href="https://github.com/Meeovi/alternatecms/discussions">Discussions</a></li>
        <li><a className="dropdown-item" href="https://github.com/Meeovi/alternatecms/releases">Versions</a></li>
        <li><a className="dropdown-item" href="https://www.alternatecms.com">Official Site</a></li>
      </ul>
    </div>
  </div>

 )
}

export default Footer
