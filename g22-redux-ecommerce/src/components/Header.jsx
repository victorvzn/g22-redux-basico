import iconMenu from '../assets/images/icon-menu.svg'
import iconAvatar from '../assets/images/image-avatar.png'
import iconCart from '../assets/images/icon-cart.svg'
import { useState } from 'react'

const Header = () => {
  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  return (
    <header className='flex justify-between h-20 px-8'>
      <div className='flex items-center gap-3'>
        <img src={iconMenu} alt="menu desplegable" className='mt-2' />
        <h1 className="font-['Kumbh Sans'] font-extrabold text-4xl">sneakers</h1>
      </div>
      <div className='flex items-center gap-3 relative'>
        <button className='cursor-pointer' onClick={handleOpenCart}>
          <img src={iconCart} alt="icono del carrito de compras" />
        </button>
        {openCart &&
          <div className='absolute top-24 right-0  w-60 h-80 p-4 rounded-xl bg-white shadow-lg'>
            <h3 className='text-xl font-bold mb-4'>Shopping cart</h3>
            <div>
              <div className='flex justify-between hover:bg-gray-200 p-2 rounded-xl'>
                Product 1
                <button className='bg-red-500 rounded-full w-8 h-8 text-white font-bold'>X</button>
              </div>
              <div className='flex justify-between hover:bg-gray-200 p-2 rounded-xl'>
                Product 1
                <button className='bg-red-500 rounded-full w-8 h-8 text-white font-bold'>X</button>
              </div>
              <div className='flex justify-between hover:bg-gray-200 p-2 rounded-xl'>
                Product 1
                <button className='bg-red-500 rounded-full w-8 h-8 text-white font-bold'>X</button>
              </div>
            </div>
          </div>
        }
        <img src={iconAvatar} alt="avatar del usuario" width="32" />
      </div>
    </header>
  )
}

export default Header