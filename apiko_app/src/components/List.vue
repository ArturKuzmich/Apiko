<template>
  <div class="container_list">
    <div class="filters">
      <div class="drop_down">
        <svg class="grid" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1429 0H14.5714C15.9126 0 17 1.08739 17 2.42857V4.85714C17 6.19832 15.9126 7.28571 14.5714 7.28571H12.1429C10.8017 7.28571 9.71429 6.19832 9.71429 4.85714V2.42857C9.71429 1.08739 10.8017 0 12.1429 0ZM12.1429 9.71429H14.5714C15.9126 9.71429 17 10.8017 17 12.1429V14.5714C17 15.9126 15.9126 17 14.5714 17H12.1429C10.8017 17 9.71429 15.9126 9.71429 14.5714V12.1429C9.71429 10.8017 10.8017 9.71429 12.1429 9.71429ZM4.85714 9.71429H2.42857C1.08739 9.71429 0 10.8017 0 12.1429V14.5714C0 15.9126 1.08739 17 2.42857 17H4.85714C6.19832 17 7.28571 15.9126 7.28571 14.5714V12.1429C7.28571 10.8017 6.19832 9.71429 4.85714 9.71429ZM2.42857 0H4.85714C6.19832 0 7.28571 1.08739 7.28571 2.42857V4.85714C7.28571 6.19832 6.19832 7.28571 4.85714 7.28571H2.42857C1.08739 7.28571 0 6.19832 0 4.85714V2.42857C0 1.08739 1.08739 0 2.42857 0Z" fill="#505050"/>
        </svg>
        <input class="filter_select"type="text" placeholder="Choose Category ">
        <svg class="arrow_down" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14256 7.62263L14.7307 0.206903C15.0092 -0.0569426 15.4723 -0.0701756 15.7649 0.177159C16.0576 0.424494 16.0691 0.838996 15.7904 1.10284L9.06588 8.67222C8.86861 8.85905 8.57881 8.92028 8.32251 8.85227C8.03055 9.06765 7.59773 9.0531 7.32469 8.80862C7.03436 8.54867 0.217836 1.35396 0.217836 1.35396C-0.072612 1.09414 -0.072612 0.672842 0.217836 0.412901C0.508284 0.153081 0.978876 0.153081 1.26934 0.412901L8.14256 7.62263Z" fill="#666666"/>
        </svg>
      </div>
      <div class="filter_price">
        <input type="number" @change="sortByPrice" v-model.number="minPrice" placeholder="Price from (USD)">
        <span></span>
        <input type="number" @change="sortByPrice" v-model.number="maxPrice" placeholder="Price to (USD)">
      </div>
    </div>
    <div class="items_list">
      <div class="item" v-for="d in sortItems" :key="d.id">
        <figure class="item_img">
          <img :src="d.image" alt="">
        </figure>
        <div class="item_desc">
          <h2 class="item_name">{{ d.name }}</h2>
          <div class="item_price">${{ d.price }}</div>
          <button class="favorite_item">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.468 0.0104926C15.968 0.0104926 17.3937 0.638009 18.383 1.61687C19.3723 2.59549 20 4.02098 19.9998 5.52118C19.9998 6.01046 19.9498 6.48981 19.8509 6.95732C19.6523 7.89419 19.4115 8.56141 18.8616 9.40409C18.5925 9.81667 18.3537 10.1614 18.1276 10.4465C17.9068 10.7252 17.5957 11.0636 17.2021 11.4574C16.8084 11.8509 16.4892 12.1593 16.2446 12.3828C16.1231 12.4936 15.9724 12.6247 15.7958 12.7784C15.6164 12.9346 15.4101 13.114 15.1807 13.319C14.4444 13.9763 13.8748 14.4919 13.4785 14.8614C13.0875 15.2261 12.5981 15.7361 12.0103 16.3933C11.4279 17.0446 10.9303 17.7051 10.4997 18.3508C10.3769 18.535 10.202 18.6167 9.99974 18.6167C9.80843 18.6167 9.6466 18.5332 9.52111 18.3508C8.84863 17.3735 8.13827 16.5208 7.1701 15.5956C6.69147 15.138 6.32696 14.7899 6.07438 14.5636C6.02983 14.5237 5.981 14.4798 5.92779 14.4321C5.67275 14.203 5.31713 13.8836 4.85088 13.4785C4.36134 13.0532 3.98912 12.7233 3.74448 12.4997C3.49984 12.2763 3.16484 11.9627 2.7552 11.5635C2.34575 11.1647 2.04255 10.8189 1.82967 10.5422C1.61703 10.2658 1.36853 9.91722 1.09572 9.49987C0.826111 9.08726 0.623431 8.68216 0.489314 8.30837C0.219216 7.55441 0 6.55288 0 5.52115C0 4.02098 0.627745 2.59549 1.61706 1.61683C2.60657 0.638009 4.03206 0.0104599 5.53199 0.0104599C6.41484 0.0104599 7.24458 0.212486 8.04255 0.616898C8.84049 1.02111 9.48938 1.57419 10 2.27637C10.5107 1.57419 11.1595 1.02111 11.9575 0.61693C12.7552 0.212486 13.585 0.0104926 14.468 0.0104926ZM16.8724 10.0849C17.9018 8.94425 18.5185 7.78657 18.7234 6.60618C18.7844 6.25464 18.8192 5.89334 18.8195 5.52115C18.8195 4.31899 18.394 3.29771 17.5429 2.45729C16.6919 1.61687 15.6706 1.19134 14.4684 1.19134C13.628 1.19134 12.8407 1.41464 12.1281 1.87219C11.4154 2.32948 10.9023 2.93977 10.543 3.69121C10.4341 3.91886 10.245 4.02098 10.0004 4.02098C9.75575 4.02098 9.58189 3.91134 9.47908 3.69121C9.12435 2.93252 8.5749 2.32948 7.86206 1.87219C7.14918 1.41464 6.37255 1.19134 5.53216 1.19134C4.33023 1.19134 3.30892 1.6169 2.44719 2.46794C1.59611 3.30837 1.17059 4.32964 1.17059 5.52115C1.17059 6.14866 1.22621 6.71513 1.40458 7.26572L1.64925 8.02102C1.77138 8.39851 2.06814 8.8369 2.30582 9.18803C2.36051 9.26881 2.41206 9.34497 2.45765 9.41471C2.57569 9.59497 2.75565 9.81892 2.98964 10.0743C3.03999 10.1292 3.08824 10.1818 3.13436 10.2321C3.3026 10.4155 3.44259 10.5681 3.55337 10.6913C3.69931 10.8534 3.92265 11.067 4.21291 11.3295L4.8831 11.936L5.61706 12.5848C6.30611 13.194 6.80856 13.6381 7.13833 13.9359C7.4681 14.2339 7.91222 14.6833 8.48938 15.2763C9.06108 15.8641 9.56376 16.436 9.99997 16.9997C10.4149 16.4253 10.9014 15.8375 11.4575 15.2445C12.0185 14.646 12.4894 14.1703 12.8723 13.819C13.2661 13.4575 13.7685 13.0027 14.3936 12.4466C15.5983 11.3749 16.423 10.5826 16.8724 10.0849Z" fill="#B7B7B7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ItemsList",
  props: {
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data(){
    return {
      minPrice: '',
      maxPrice: '',
      sortedList: []
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    sortItemsByName(value){
      if(value){
        this.sortedList = this.data.filter(function (item)  {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      }
      else {
        this.data = this.data
      }
    },
    sortByPrice(){
      let ctx = this
      this.sortedList = this.data.filter(function (item){
        return item.price >= ctx.minPrice && item.price <= ctx.maxPrice
      })
    }
  },
  computed: {
    ...mapGetters(['SEARCH_VALUE',]),
    // prop: {
    //   get(){return this.data},
    //   set(val){this.$emit('updateProp', val)}
    // },
    sortItems(){ ///func to visible items when search input.length === 0
      if (this.sortedList.length){
        return this.sortedList
      }else{
        return this.data
      }
    }
  },
  watch: {
    SEARCH_VALUE(){
      this.sortItemsByName(this.SEARCH_VALUE)
    },
  }
}
</script>

<style scoped>
.items_list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
}
.item {
  width: 24%;
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344);
  border-radius: 4px;
  overflow: hidden;
  margin:0 6px 10px 0;
}
.item:last-child{
  margin-right: 0;
}
.item_img {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 3.5px 0 3.5px;
}

.item_img img {
  width: 100%;
  border-radius: 4px 4px 0 0;
}

.item_desc {
  padding: 6px 0 10px 12px;
  position: relative;
}

.item_name {
  text-align: start;
  font-family: Helvetica;
  font-size: 15px;
  line-height: 17px;
  color: #373738;
  margin: 0 0 7px 0;
}

.item_price {
  font-family: Helvetica;
  font-size: 18px;
  line-height: 21px;
  color: #101010;
  text-align: start;
}
.favorite_item{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407);
  right: 7px;
  top: -15px;
  border: none;
  outline: none;
  cursor: pointer;
}
.filters{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
  border-radius: 4px;
  padding: 12px 11px;
  max-width: 56%;
  margin: 19px auto 18px auto;
}
.drop_down{
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F9FAFB;
  border: 1px solid #DEDEE0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 9px 5px 9px 11px;
  margin: 0 23px 0 0;
  position: relative;
}
.drop_down .grid{
  margin: 0 11px 0 0;
}
.arrow_down{

}
.filter_select{
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.35px;
  color: #505050;
}
.filter_price{
  display: flex;
  align-items: center;
}
.filter_price span{
  border: 1px solid #DEDEE0;
  width: 12px;
  margin: 0 7px;
}
.filter_price input{
  width: 36%;
  background: #F9FAFB;
  border: 1px solid #DEDEE0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 9px;
  outline: none;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.35px;
  color: #505050;
}
@media only screen and (max-width: 1024px){
  .filters{
    max-width: 70%;
  }
  .items_list{
    width: 80%;
  }
}
@media only screen and (max-width: 768px){
  .filters{
    max-width: 80%;
  }
  .items_list{
    width: 86%;
  }
  .drop_down{
    width: 42%;
  }
  .filter_price input{
    width: 40%;
  }
}
@media only screen and (max-width: 600px){
  .filters{
    max-width: 85%;
    padding: 8px 10px;
  }
  .drop_down .grid{
    margin: 0 5px 0 0;
  }
  .filter_price input{
    width: 45%;
  }
  .drop_down{
    margin: 0 15px 0 0;
  }
  .items_list{
    width: 90%;
    justify-content: center;
  }
  .item{
    width: 45%;
  }
}
@media only screen and (max-width: 425px){
    .filters{
      max-width: 90%;
    }
  .drop_down{
    width: 35%;
    height: 30px;
    padding: 6px 5px 6px 5px;
  }
  .filter_select{
    font-size: 13px;
  }
  .filter_price input {
    padding: 7px 5px;
    font-size: 13px;
  }
  .items_list{
    width: 100%;
  }
}
@media only screen and (max-width: 375px){
  .filters{
    max-width: 100%;
    margin: 5px;
  }
  .drop_down{
    width: 62%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 0;
  }
  .arrow_down{
    width: 10px;
  }
  .drop_down .grid{
    display: none;
  }
  .filter_select{
    font-size: 12px;
    width: 100%;
  }
  .filter_price span{
    width: 6px;
    margin: 0 4px;
  }
}
</style>