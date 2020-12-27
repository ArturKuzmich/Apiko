<template>
  <form @submit.prevent="addItem()" class="create_item-form">
    <h2>Add product</h2>
    <input_group
        v-model="title"
        :type="'text'"
        :label="'Title'"
        :placeholder="'For example: Iron man suit'"
        :isShowSvg="false"
    >
    </input_group>
    <input_group
        v-model="location"
        :type="'text'"
        :label="'Location'"
        :placeholder="'For example: Los Angeles, CA'"
        :isShowSvg="false"
    >
    </input_group>
    <div class="description_new-item">
      <label class="label_description">Description</label>
      <textarea v-model="description" class="description">
      </textarea>
    </div>
    <label class="photos_label">Photos</label>
    <div class="upload_image">
      <div class="preview">
        <input type="file" @change="onFileChange">
        <div v-if="!url" class="upload_btn">
          <span class="rotate"></span>
          <span></span>
        </div>
        <img v-else :src="url" />
      </div>
    </div>
    <input_group
        v-model="price"
        :type="'text'"
        :label="'Price'"
        :placeholder="'For example: 125'"
        :isShowSvg="false"
    >
    </input_group>
    <div class="submit">
      <btn_group :type="'submit'" :text="'Submit'"></btn_group>
    </div>
  </form>
</template>

<script>
import Input_group from "@/components/input_group";
import Btn_group from "@/components/btn_group";

export default {
  name: "New_Products",
  components: { Input_group, Btn_group},
  data() {
    return {
      photos: '',
      title: '',
      price: '',
      location: '',
      description: '',
      url: ''
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    addItem(e) {
      let title = this.title
      let price = this.price
      let photos = this.url
      let description = this.description
      this.$store.dispatch('SAVE_NEW_ITEM', {title, price, photos,description})
      // this.$router.push('/') ///when pushed new data clean after reload
    }
  },
}
</script>

<style scoped>
  .create_item-form{
    padding: 36px 236px 32px 236px;
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    margin: 34px 152px 0 152px;
  }
  .create_item-form h2{
    font-family: Helvetica;
    font-size: 22px;
    line-height: 25px;
    color: #282828;
    margin: 0 0 24px 0;
  }
  .description_new-item{
    display: flex;
    flex-direction: column;
    margin: 0 0 24px 0;
  }
  .description_new-item label{
    font-family: Helvetica;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: #303030;
    margin: 0 0 4px 0;
    text-align: start;
  }
  .description_new-item textarea{
    max-height: 180px;
    min-height: 180px;
    max-width: 663px;
    min-width: 663px;
  }
  .upload_image{
    background: #F9FAFB;
    border: 1px solid #DEDEE0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 16px;
    margin: 0 0 24px 0;
  }
  .upload_image label{
  }
  .photos_label{
    display: flex;
    font-family: Helvetica;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: #303030;
    margin: 0 0 4px 0;
    text-align: start;
  }
  .preview{
    position: relative;
    width: 92px;
    height: 92px;
    overflow: hidden;
    background: #E4E4E4;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .preview img{
    width: 100%;
  }
  .preview input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    opacity: 0;
  }
  .upload_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .upload_btn span{
    width: 4px;
    height: 38px;
    background: #349A89;
    border-radius: 4px;
  }
  .upload_btn .rotate{
    transform: rotate(90deg);
    position: absolute;
  }
  .submit{
    width: 70%;
    padding: 17px 0 0 0;
    margin: 0 auto;
    overflow: hidden;

  }
</style>