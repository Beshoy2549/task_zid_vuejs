<template>
  <div>
    <!-- Navbar -->
    <div class="nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 col-md-5 col-lg-5">
            <div class="time">
              <b-icon-list font-scale="2" v-b-toggle.sidebar-right
                >Toggle Sidebar</b-icon-list
              >
              <span>الساعة ٨:٣٨ صباحا بتوقيت الرياض</span>
            </div>
          </div>
          <div class="col-9 col-md-7 col-lg-7">
            <div class="logut">
              تسجيل خروج
              <b-icon-box-arrow-in-left
                font-scale="1.4"
              ></b-icon-box-arrow-in-left>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Sidebar -->
    <b-sidebar
      id="sidebar-right"
      bg-variant="dark"
      width="250px"
      text-variant="light"
      right
      shadow
    >
      <div class="brand">
        <p>اسم المتجر</p>
        <a href="#"><b-icon-eye-fill></b-icon-eye-fill> مشاهدة المتجر </a>
        <a href="#"><b-icon-pencil-fill></b-icon-pencil-fill> تخصيص الواجهة </a>
      </div>
      <ul class="main-menu">
        <router-link :to="{ name: 'Home' }" tag="li"
          ><a>الرئيسية</a></router-link
        >
        <router-link :to="{ name: 'Reports' }" tag="li"
          ><a>التقارير</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a>الطلبات</a></router-link
        >
        <router-link :to="{ name: 'Antag' }" tag="li"
          ><a>المنتجات</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a>التسويق</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a>العملاء</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a> زد منظومة</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a> فريق العمل</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a>الإعدادات</a></router-link
        >
        <router-link :to="{ name: 'About' }" tag="li"
          ><a>الواجهة خيارات</a></router-link
        >
      </ul>
    </b-sidebar>
    <!-- End Sidebar  -->
  </div>
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #302539;
  color: #fff;
  text-align: right;
  padding: 15px;
  @media (max-width: 768px) {
    background-color: #8d5da7;
  }
  span {
    vertical-align: super;
    display: inline-block;
    padding: 0 5px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .logut {
    vertical-align: super;
    text-align: left;
  }
}
.brand {
  p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
  a {
    background-color: #8d5da7;
    padding: 7px;
    border-radius: 10px;
    width: 80%;
    margin: 10px auto;
    color: #fff;
    display: block;
    text-decoration: none;
    font-size: 13px;
    transition: all 0.3s ease;
    font-weight: bold;
  }
  a:nth-child(3) {
    background-color: #44a787;
  }
}

ul {
  margin-top: 20px;
  li {
    margin-bottom: 10px;
    a {
      display: inline-block;
      width: 100%;
      color: #fff;
      background-color: #231f27ab;
      text-decoration: none;
      font-size: 13px;
      font-weight: bold;
      padding: 18px 20px;
      transition: all 0.3s ease;
      text-align: right;
      &:hover {
        background-color: #44a787;
      }
    }
  }
}
footer {
  text-align: center;
  position: fixed;
  bottom: 5px;
  margin: auto;
}
</style>
