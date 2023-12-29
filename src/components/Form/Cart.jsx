import '../../scss_dir/cart.scss'

const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function Items (){

  return(
  items.map(item=>
    <div key = {item.id}className="product-container col col-12" data-count={item.quantity} data-price={item.price}>    
      <img className="img-container"src={item.img} alt={item.name} />
      <div className="product-info">
      <div className="product-name">{item.name}</div>
      <div className="product-control-container">
      <div className="product-control">
      <svg className="product-action minus">
      <use xlinkHref="#svg-icon-minus"></use>
      </svg>
      <span className="product-count">{item.quantity}</span>
      <svg className="product-action plus">
      <use xlinkHref="#svg-icon-plus"></use>
      </svg>
      </div>
      </div>
      <div className="price">{item.price}</div>
      
      
    </div>
    </div>
    )

    )
}  

export default function Cart (){
  return(
  <section className="cart-container col col-lg-5 col-sm-12">
  <h3 className="cart-title">購物籃</h3>

  <Items></Items>
  
  <section className="cart-info shipping col col-12">
  <div className="text">運費</div>
  <div className="price"></div>
  </section>
  <section className="cart-info total col col-12">
   <div className="text">小計</div>
  <div className="price"></div>
  </section>

    </section>
  )
  
}