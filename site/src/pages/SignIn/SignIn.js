import './style.css';
import boi1 from '../../assets/boi1.png';
import boi2 from '../../assets/boi2.png';
import boi3 from '../../assets/boi3.png';

function SignIn() {
  return (
    <div className="container-sign-in">
      <div className='container-body'>
        <div className='container-par-photos'>
          <img src={boi1} alt='Foto sobre oferta de bois.' className='foto1' />
          <img src={boi2} alt='Foto sobre oferta de bois.' className='foto2' />
        </div>
        <div className='container-single-photo'>
          <img src={boi3} alt='Foto sobre oferta de bois.' className='foto3' />
        </div>
        <div className='container-title'>
          <h2>LOTES EM DESTAQUE</h2>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
