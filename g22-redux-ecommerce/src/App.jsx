import iconMenu from './assets/images/icon-menu.svg'
import iconCart from './assets/images/icon-cart.svg'
import iconAvatar from './assets/images/image-avatar.png'
import imageProduct from './assets/images/image-product-1.jpg'

function App() {
  return (
    <>
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

      <main className=''>
        <section className='w-full bg-red-500'>
          <img src={imageProduct} className='h-[500px] w-full object-cover' />
        </section>
        <section>
          
        </section>
      </main>
    </>
  )
}

export default App
