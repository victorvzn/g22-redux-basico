import iconMenu from '../assets/images/icon-menu.svg'
import iconAvatar from '../assets/images/image-avatar.png'
import iconCart from '../assets/images/icon-cart.svg'

const Header = () => {
  return (
    <header className='flex justify-between h-20 px-8'>
      <div className='flex items-center gap-3'>
        <img src={iconMenu} alt="menu desplegable" className='mt-2' />
        <h1 className="font-['Kumbh Sans'] font-extrabold text-4xl">sneakers</h1>
      </div>
      <div className='flex items-center gap-3'>
        <button className='cursor-pointer'>
          <img src={iconCart} alt="icono del carrito de compras" />
        </button>
        <img src={iconAvatar} alt="avatar del usuario" width="32" />
      </div>
    </header>
  )
}

export default Header