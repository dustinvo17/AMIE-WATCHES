
<template>

      <div class="minicart">
          <div class="container">
              <div class="minicart-top">
                  <div>
                        <p>CART</p>
                        <i class="material-icons" style="font-size:30px;cursor:pointerl" v-on:click="closeNavBar" >clear</i>
                
                  </div>
                
                <div >
                <p v-if="cart.token" class="minicart-top-text">{{cart.items.length}} product{{cart.items.length > 1 ? 's' : ''}} in your cart</p>
                 
                </div>
                
          
            </div>
                <ul v-if="cart.token">
                        <li v-for= "item in cart.items" :key="item.id">
                            <div>
                                <img :src="item.image">

                            </div>
                            <div class="minicart-item__info">
                                <div>
                                     <p>{{item.handle}}</p>
                                    <p>{{item.final_price | money}} x {{item.quantity}}</p>
                                </div>
                                  <div>
                                        <i style="font-size:18px;" class="material-icons" v-on:click="removeFromCart(item)" >clear</i>
                                  </div>
                            </div>

                        </li>
                    </ul>
                <div style="display:flex;flex-direction:column;margin-bottom:40px;">
                    <p  >Total: <span style="font-size:20px;margin-left:5px;">{{cart.total_price | money}}</span> </p>
                    <p style="margin:30px 0;">Shipping & taxes calculated at checkout</p>
                    <p>Free Shipping USA</p>
            
                </div>
                <div class="minicart-btn">
                    <a href="/cart" class="btn">EDIT CART</a>
                    <a href="/checkout" class="btn">CHECKOUT</a>
                </div>
                
          </div>
        


     </div>


</template>

<script>
import axios from 'axios'
import {openNav, closeNav} from '../components/canvas'
export default {
    name:"CartMini",
    
    props:['cart'],
    
         methods: {
       
             closeNavBar: function() {
                 closeNav()
                document.querySelector('.minicart-top-text').innerHTML  = `${this.cart.items.length} product${this.cart.items.length > 1 ? 's' :''} in your cart`
             },
             removeFromCart: function(item){
                 this.$emit('remove-item-from-cart',item)
                  document.querySelector('.minicart-top-text').innerHTML = '1 product was removed from your cart'
             }
         }
    


}
</script>
