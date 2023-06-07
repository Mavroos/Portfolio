import './header.css';



function header() {
    return (
        <div className="header">
            <h1 className="myName"> Mauro Tonetti </h1>
            <ul className="lista">
                <li><a className="element" href="#Home">Home</a></li>
                <li><a className="element" href="#Skills">Skills</a></li>
                <li><a className="element" href="#Projects">Projects</a></li> <a></a>
            </ul>
        </div>
      
    );
  }
  
  export default header;