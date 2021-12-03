import ReactDOM from 'react-dom';
import FundoMobile from './FundoMobile';
import Navbar from './Navbar';
import Corpo from './Corpo';

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