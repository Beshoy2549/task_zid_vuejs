<template>
  <div class="home">
    <div class="describtion fadeInUp">
      <p>
        عند تفعيلك لبوابات الدفع الموضحة ادناه، ستتمكن من ربط متجرك الإلكتروني
        بإحدى تلك البوابات المختلفة. كل بوابة من البوابات لديها إشتراطات معينة
        لتفعيل حسابك لديهم. خيارات الدفع تتيح لك استقبال المدفوعات الإلكترونية
        عبر البطاقات الإئتمانية وبعضهم يدعم خيار: مدى، للدفع الإلكتروني سنقوم
        بربطك الكترونيًا معهم ولكنك بحاجة أيضًا الى تفعيل اشتراكك لديهم وتعبئة
        النماذج اللازمة.
      </p>
    </div>
    <div class="container">
      <div class="paid">
        <h6 class="title">
          بوابات الدفع
        </h6>
        <div class="paid-box-content">
          <div class="row">
            <div class="col-6 ">
              <div class="mini-info-box">
                <h6>بوابة تاب</h6>
                <p>يمكنك تفعيل بوابة تاب للدفع</p>
                <a class="btn btn-success btn-sm">اضغط لمزيد من التفاصيل</a>
              </div>
            </div>
            <div class="col-6">
              <div class="mini-info-box">
                <h6>بوابات دفع أخرى</h6>
                <p>من هنا يمكنك تفعيل بوابات أخرى</p>
                <a class="btn btn-success btn-sm">اضغط لمزيد من التفاصيل</a>
              </div>
            </div>
          </div>
        </div>
        <div class="more">
          <a class="btn btn-success btn-sm">اضغط لمزيد من التفاصيل</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="paymant-box">
        <div class="row header-box">
          <div class="col-6">
            <p>التحويل البنكي</p>
          </div>
          <div class="col-6 dir">
            <a @click="open = true" class="btn btn-success btn-sm"
              >إضافة حساب جديد</a
            >
          </div>
        </div>
        <div class="bank-list" v-for="(bank, i) in Banks" :key="bank.id">
          <div class="row">
            <div class="col-6">
              <p>{{ bank.bank_name }}</p>
            </div>
            <div class="col-6 dir" @click="deleteBank(i)">
              <b-button size="sm" class="mb-2">
                <b-icon-archive-fill variant="dark"></b-icon-archive-fill>
              </b-button>
            </div>
            <div class="personal-information">
              <strong>المالك : </strong> <span>{{ bank.owner_name }} </span>
              <br />
              <strong>رقم الحساب : </strong>
              <span>{{ bank.account_number }}</span>
              <br />
              <strong>الأيبان : </strong> <span>{{ bank.ebyan }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foooter />
    <!-- modal -->
    <div class="modal-box">
      <vue-modaltor
        :animation-panel="'modal-slide-top'"
        :bgPanel="'#120f17'"
        :default-width="'60%'"
        :bg-overlay="'rgba(0 , 0 , 0 , .15)'"
        :visible="open"
        @hide="hideModal"
      >
        <p class="modal-title">أضف حساب بنكي</p>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <label for="">اسم البنك</label>
            <div class="form-group">
              <select
                class="custom-select form-control  custom-select-sm"
                v-model="newbank"
              >
                <option value="" selected disabled>اختار البنك</option>
                <option
                  v-for="(item, i) in list_of_banks"
                  :key="i"
                  :value="item"
                  >{{ item }}</option
                >
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-group">
              <label for="">رقم الحساب</label>
              <input
                required="required"
                v-model="newaccount"
                type="text"
                class="form-control form-control-sm"
                placeholder="123456789XXXXXX"
              />
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-group">
              <label for="">الأيبان</label>
              <input
                required="required"
                v-model="newebyan"
                type="text"
                class="form-control form-control-sm"
                placeholder="SA03 8000 0000 6080 XXXX XXXX"
              />
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-group">
              <label for="">اسم المستفيد</label>
              <input
                required="required"
                v-model="newowner"
                type="text"
                class="form-control form-control-sm"
                placeholder="Name of the account owner"
              />
            </div>
          </div>
        </div>
        <div class="modaal-footer">
          <a
            class="btn btn-success btn-md"
            @click="
              addBank();
              open = false;
            "
            >حفظ</a
          >
          <a class="btn btn-danger btn-md" @click="open = false">إغلاق</a>
        </div>
      </vue-modaltor>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import foooter from "../components/global/foooter";
export default {
  name: "Home",
  components: {
    foooter,
  },
  data() {
    return {
      open: false,
      newowner: "",
      newbank: "",
      newaccount: "",
      newebyan: "",
    };
  },
  computed: {
    Banks() {
      return this.$store.getters.Banks;
    },
    list_of_banks() {
      return this.$store.getters.list_of_banks;
    },
  },
  methods: {
    ...mapMutations(["DELETE_BANK", "ADD_BANK"]),
    addBank() {
      let req = {
        id: this.Banks.length,
        bank_name: this.newbank,
        owner_name: this.newowner,
        account_number: this.newaccount,
        ebyan: this.newebyan,
      };
      this.ADD_BANK(req);
    },
    deleteBank(item) {
      var result = confirm("متأكد من المسح ؟");
      if (result) {
        this.DELETE_BANK(item);
      }
    },
    hideModal() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.describtion {
  color: #8c5da7;
  background-color: rgba(117, 75, 136, 0.21);
  border-radius: 1.3rem;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 16px;
  margin: 1rem auto;
  width: 95%;
}
.paid {
  .title {
    padding: 15px;
    border-bottom: 1px solid #443550;
  }
  .paid-box-content {
    padding: 20px;
    .mini-info-box {
      padding: 22px 30px;
      border-radius: 10px;
      border: 1px solid #443550;
      .btn-success {
        background-color: #8d5da7;
        border-color: #8d5da7;
      }
    }
  }
  .more {
    padding: 15px;
    text-align: center;
  }
}
.paymant-box,
.paid {
  background-color: #302539;
  padding: 10px 20px 0;
  border-radius: 12px;
  margin-bottom: 20px;
  .header-box {
    padding-bottom: 5px;
  }
  .dir {
    text-align: left;
  }
  .bank-list {
    padding: 10px 0;
    border-top: 1px solid #443550;
    p {
      font-weight: 700;
      margin: 5px 0 0 0;
    }
    .personal-information {
      color: #6c627a;
      padding: 10px 20px;
    }
  }
}
.modal-box {
  color: #fff;
  .modal-title {
    font-weight: 700;
    padding-bottom: 20px;
    font-size: 16px;
  }
  .form-group {
    margin-bottom: 25px;
    .form-control {
      border-color: #413847;
      color: #8d5da7;
      background-color: #302935;
    }
  }
  .modaal-footer {
    text-align: center;
    a {
      display: inline-block;
      margin: 0 5px;
    }
  }
}
</style>
