import './styles.css';
import logao from '../assets/logao.svg'
import lupa from '../assets/lupa.png';
import { NavLink } from 'react-router-dom'

function SignIn() {
  return (
    <div className="container-sign-in">
      <header className='container-cabecalho'>
        <div className='container-cabecalho-up'>
          <img src={logao} alt='Logo da Erural' className='logo' />
          <div className='container-input-pesquisa'>
            <img src={lupa} alt='Lupa para pesquisa' className='lupa' />
            <input
              className='container-input-cabecalho'
              type='text'
              placeholder='O que você esta procurando?'
            />
          </div>
          <button className='container-buttom-signin'>Entrar</button>
        </div>
        <div className='container-cabecalho-down'>
          <ul>
            <NavLink to='/'>INICIO</NavLink>
            <NavLink to='/'>AGENDA DE EVENTOS</NavLink>
            <NavLink to='/' >REPOSIÇÃO</NavLink>
            <NavLink to='/' >GENÉTICA</NavLink>
            <NavLink to='/' >SÊMEN GENEX</NavLink>
            <NavLink to='/' >SALA VIRTUAL</NavLink>
            <NavLink to='/' >TRABALHE NA ERURAL</NavLink>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default SignIn;
