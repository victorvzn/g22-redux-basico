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
          <h3>Sneaker company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div>
            <div>
              <h2>$125.00</h2>
              <span>50%</span>
            </div>
            <div>
              $250.00
            </div>
          </div>
          <div>
            <img src={} />
            <span>0</span>
            <img src={} />
          </div>
          <button>
            Add to cart
          </button>
        </section>
      </main>
    </>
  )
}

export default App
