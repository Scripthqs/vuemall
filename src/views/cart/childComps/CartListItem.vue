<template>
  <div class="list-item">
    <!-- 是否选中图标 -->
    <div class="item-selector">
      <check-button class="ck-button" :isChecked="product.checked" @click.native="checkClick(itemIndex)" />
    </div>
    <!-- 左边 -->
    <div class="item-img" @click="detailClick">
      <div class="div-img">
        <img :src="product.imgURL" alt="" @load="imageLoad" />
      </div>
    </div>

    <!-- 右边 -->
    <div class="item-right">
      <div class="item-title" @click="detailClick">{{ product.title }}</div>
      <div class="item-desc">商品描述：{{ product.desc }}</div>

      <div class="item-price-count">
        <span class="item-price">¥{{ product.newPrice }}</span>
        <div class="right">
          <button @click="decreaseCount">-</button>
          <span class="item-count">×{{ product.count }}</span>
          <button @click="increaseCount">+</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
  name: "CartListItem",
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      },
    },
    itemIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    imageLoad () {
      this.$emit("CartImgLoad")
    },
    checkClick (index) {
      this.$store.dispatch("clickCheck", index)
    },
    detailClick () {
      this.$router.push("/detail/" + this.product.iid)
    },
    decreaseCount () {
      if (this.product.count > 1) {
        this.product.count--
      }
    },
    increaseCount () {
      this.product.count++
    }
  },
};
</script>

<style scoped>
.list-item {
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  width: 25vw;
  height: 30vw;
}
.item-img .div-img {
  width: 95%;
  height: 95%;
  margin: 2.5% 2.5%;
  border-radius: 5px;
  overflow: hidden;
}
.item-img img {
  width: 100%;
  vertical-align: top;
}
.item-right {
  width: 62.5vw;
  height: 30vw;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  font-size: 14px;
  color: #666;
}
.item-price-count {
  display: flex;
  justify-content: space-between;
}
.item-price {
  color: orangered;
}
.ck-button {
  flex: none;
}
/* .right div {
  display: inline-block;
  width: 30px;
  margin: 0 5px;
} */
.right button {
  background: #fff;
  font-size: 16px;
  /* text-align: center; */
  padding: 0 6px;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.right .item-count {
  margin: 0 6px;
}
</style>