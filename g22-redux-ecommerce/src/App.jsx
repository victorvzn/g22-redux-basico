import iconMenu from './assets/images/icon-menu.svg'
import iconCart from './assets/images/icon-cart.svg'
import iconAvatar from './assets/images/image-avatar.png'
import imageProduct from './assets/images/image-product-1.jpg'
import iconMinus from './assets/images/icon-minus.svg'
import iconPlus from './assets/images/icon-plus.svg'

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
        <section className='p-8 flex flex-col gap-4'>
          <h3 className='text-xl uppercase font-bold text-[#ff7d1b]'>Sneaker company</h3>
          <h1 className='text-5xl font-bold'>Fall Limited Edition Sneakers</h1>
          <p className='text-xl font-normal text-gray-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className='flex justify-between'>
            <div className='flex gap-6'>
              <h2 className='text-5xl font-bold'>$125.00</h2>
              <span className='text-2xl font-bold text-[#ff7d1b] bg-[#ff7d1b]/20 px-4 py-2 rounded-lg'>50%</span>
            </div>
            <div className='text-2xl font-bold line-through text-gray-500'>
              $250.00
            </div>
          </div>
          <div className='flex justify-between items-center bg-gray-200 px-8 py-6 rounded-xl'>
            <img src={iconMinus} />
            <span className='text-2xl font-bold'>0</span>
            <img src={iconPlus} />
          </div>
          <button className='w-full text-2xl font-bold p-6 text-white rounded-xl flex justify-center gap-6 bg-[#ff7d1b] hover:bg-[#ff7d1b]/80 '>
            <img src={iconCart} className='mt-1' />
            Add to cart
          </button>
        </section>
      </main>
    </>
  )
}

export default App
