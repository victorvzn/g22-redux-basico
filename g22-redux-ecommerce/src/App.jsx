import iconMenu from './assets/images/icon-menu.svg'
import iconCart from './assets/images/icon-cart.svg'
import iconAvatar from './assets/images/image-avatar.png'

function App() {
  return (
    <header className='flex justify-between h-20 bg-red-400'>
      <div className='flex items-center'>
        <img src={iconMenu} alt="menu desplegable" />
        <h1 className="font-['Kumbh Sans'] font-extrabold text-6xl">sneakers</h1>
      </div>
      <div className='flex items-center'>
        <img src={iconCart} alt="icono del carrito de compras" />
        <img src={iconAvatar} alt="avatar del usuario" />
      </div>
    </header>
  )
}

export default App
