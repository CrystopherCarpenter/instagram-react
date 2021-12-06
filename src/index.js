import ReactDOM from 'react-dom';
import FundoMobile from './components/FundoMobile';
import Navbar from './components/Navbar';
import Corpo from './components/Corpo';

function Insta(){
    return(
      <>
      <Navbar />
      <Corpo />
      <FundoMobile />
      </>
    );
}

ReactDOM.render(<Insta />, document.querySelector(`.root`));