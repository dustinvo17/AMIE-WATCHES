
import CartMini from  '../vue-components/CartMini.vue'
import {openNav, closeNav} from '../components/canvas'
Vue.filter('money', function (value, sign = '$') {
    if (!value) return 0;
    return sign + (value/100).toFixed( 2 );
  })




  //cart-page-instance 

if(document.getElementById('shopping-cart-page')){
    var cartPage = new Vue({
        el:'#shopping-cart-page',
        delimiters: ['{(', ')}'],
        data: {
            cart:{},
          
        },
        methods: {
            removeItemFromCart: async function(itemRemoved){
      
                let newCartObject = {}
                this.cart.items.map(item =>{
                    if(item.id === itemRemoved.id){
                        newCartObject[item.id]  = 0
                    }
                    else {
                        newCartObject[item.id] = item.quantity
                    }
                })
                const res = await axios.post('/cart/update.js',{
                    updates:newCartObject
                })
               
                this.cart = res.data
                miniCart.cart = res.data
            },
            updateItemQuantity: async function(e,itemUpdated) {
    
                const newQuantity = e.target.value * 1
                if(newQuantity >= 0 ){
                     await axios.post('/cart/change.js',{
                        id: itemUpdated.key,
                        quantity:newQuantity
                   
                    })
              
             
               
              
                    const res = await axios.get('/cart.js')
                    this.cart = res.data
                    miniCart.cart = res.data
                }
            
            } 
        }
    })
}

// minicart
if(document.getElementById('mini-cart')) {
    var miniCart = new Vue({
        el:'#mini-cart',
        delimiters: ['{(', ')}'],
        data: {
            cart:{}
        },
        components:{
            'cart-mini':CartMini
        },
     
        created: async function(){
           const res = await axios.get('/cart.js')
          
           this.cart = res.data
           if(document.getElementById('shopping-cart-page')){
            cartPage.cart = res.data

           }
           

           
         },
         methods: {
            removeItemFromCart: async function(itemRemoved){
      
                let newCartObject = {}
                this.cart.items.map(item =>{
                    if(item.id === itemRemoved.id){
                        newCartObject[item.id]  = 0
                    }
                    else {
                        newCartObject[item.id] = item.quantity
                    }
                })
                const res = await axios.post('/cart/update.js',{
                    updates:newCartObject
                })
               
                this.cart = res.data
                cartPage.cart = res.data
            }
         }
       
        
    })
 
}




// product-form vue instance
if(document.getElementById('product-form')){
    var productForm = new Vue({
        el:'#product-form',
        delimiters: ['{(', ')}'],

        data: {
    
            quantity: document.querySelector('.featured-product__quantity input').value,
            variantID: document.querySelector('.featured-product__form-info #id').value
        },
        methods: {
            addToCart: async function() {
                let items = [
                    {
                        quantity:this.quantity,
                        id:this.variantID
                    }
                ]
                await axios.post('/cart/add.js',{
                    items
                })
                const res = await axios.get('/cart.js')
                const newCart = res.data
                miniCart.cart = newCart

                document.querySelector('.minicart-top-text').innerHTML = `${this.quantity} item${this.quantity > 1 ? 's':''} was added to your cart`
                openNav()

             
                
           
                
           
            }
        }
    })

}
