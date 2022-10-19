import './header.css';
import logao from '../../assets/logao.svg'
import lupa from '../../assets/lupa.png';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='container-cabecalho'>
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
                    <NavLink to='/virtual_room' >SALA VIRTUAL</NavLink>
                    <NavLink to='/' >TRABALHE NA ERURAL</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
