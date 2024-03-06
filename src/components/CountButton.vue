<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 1,
    }
  },
  emits: ['update'],

  data() {
    return {
      // newQuantity: this.quantity,

    };
  },
  methods: {
    // 加商品數量
    addPic() {
      const newQuantity = this.quantity + 1;
      this.$emit('update', newQuantity)
    },
    // 減少商品數量
    deletePic() {
      if (this.quantity > 1) {
        const newQuantity = this.quantity - 1;
        this.$emit('update', newQuantity)
      }
    },
  },

  // watch: {
  //   newQuantity: {
  //     handle(newValue) {
  //       this.$emit('update', newValue)
  //     }
  //   }
  // }
};
</script>

<template>
  <div class="flex grow">
    <button type="button" class="count-btn rounded-l-full" @click="deletePic">
      -
    </button>
    <label class="border border-gray-400 border-x-0 border-y-1 grow h-[35px] flex justify-center items-center text-xl">
      <!-- 利用v-model -->
      <!-- <input v-model="newQuantity" type="number" min="1" class="h-[30px] w-[40px] border-0 p-0 text-center"> -->
      <input type="number" min="1" @input="(e) => $emit('update', Number(e.target.value))" :value="quantity"
        class="h-[30px] w-[40px] border-0 p-0 text-center">
    </label>
    <button type="button" class="count-btn rounded-r-full" @click="addPic">
      +
    </button>
  </div>
</template>

<style scoped>
.count-btn {
  @apply w-[30px] h-[35px] border border-gray-400 text-xl cursor-pointer;
}
</style>
