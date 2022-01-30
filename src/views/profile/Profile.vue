<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的商城</div>
    </nav-bar>
    <section class="profile-number">
      <router-link :to="userInfo._id ? '/userinfo': '/login'" class="profile-link clear-fix">
        <div class="profile_image">
          <!-- <i class="iconfont icon-person"></i> -->
          <img src="~assets/img/profile/头像.png" alt="" />
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
          <p class="user-info-bottom">
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>

    <section class="account">
      <div class="account-item">
        <div class="number"><span class="balance">0.00</span>元</div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>个</div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <list></list>

    <button class="logoutBtn" v-if="userInfo._id" @click="logout">退出登陆</button>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Login from "../login/Login.vue"
import List from './childComps/List.vue'



export default {
  name: "Profile",
  components: {
    NavBar,
    Login,
    List
  },
  data () {
    return {
      userInfo: {
        _id: 0
      }
    }
  },
  methods: {
    logout () {
      console.log(this.userInfo._id)

      this.userInfo._id = true
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.profile-number .profile-link {
  position: relative;
  display: block;
  background-color: var(--color-tint);
  padding: 20px 10px;
}
.profile_image {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.profile_image img {
  width: 100%;
  height: 100%;
  background: #e4e4e4;
}
/* .icon-person {
  background: #e4e4e4;
  font-size: 60px;
} */
.user-info {
  float: left;
  margin-top: 8px;
  margin-left: 15px;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}

p.user-info-bottom {
  margin-top: 8px;
}
.user-icon {
  display: inline-block;
  margin-left: -15px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
.icon-mobile {
  font-size: 30px;
  vertical-align: middle;
}
.icon-mobile-number {
  font-size: 14px;
  margin-left: 10px;
  color: #fff;
}
.arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  top: 40%;
  color: #fff;
  font-size: 10px;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}

.logoutBtn {
  width: 100%;
  height: 40px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  line-height: 43px;
  font-family: "Oswald", Helvetica;
  display: block;
  text-shadow: -1px -1px 0 #a84155;
  background: #f44336;
  border: 1px solid #d25068;
  margin-top: 40px;
}
</style>
