<template>
  <div>
    <b-container class="align-middle">
      <b-row>
        <b-form-input v-model="user_id" placeholder="请输入ID(user_这段是ID_这段是时间)" class="mb-3"></b-form-input>
      </b-row>
      <b-row>
        <b class="mb-3">二维码内容值：{{ qr_content }}</b>
      </b-row>
      <b-row>
        <b-button @click="start" class="mb-3">开始模拟二维码(强制刷新)</b-button>
      </b-row>
      <b-row>
        <b-button @click="sim" class="mb-3">模拟校园通界面(尚未完成)</b-button>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col class="col-md-auto">
          <div id="qrcode"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QRCode from "qrcodejs2"
import { useCookies } from "vue3-cookies"

export default {
  name: "QRCode",
  data: function () {
    return {
      user_id: "",
      qr_content: "",
      timer: null,
      qrcode: null
    }
  },
  setup() {
    const { cookies } = useCookies()
    return { cookies }
  },
  mounted() {
    this.user_id = this.cookies.get("user_id")
    if (this.$route.params["id"] !== undefined) {
      this.user_id = this.$route.params["id"]
    }
    this.qrcode = new QRCode(document.getElementById("qrcode"), {
      colorDark: "#53a351",
      width: 256,
      height: 256
    })
  },
  methods: {
    start() {
      this.cookies.set("user_id", this.user_id, 2592000)
      this.update()
      clearInterval(this.timer)
      this.timer = setInterval(this.update, 4000)
    },
    update() {
      this.qrcode.clear()
      let qr_content = "user_" + this.user_id + "_" + Math.floor(Date.now() / 1000)
      this.qr_content = qr_content
      console.log(qr_content)

      this.qrcode.clear()
      this.qrcode.makeCode(qr_content)
    },
    sim() {
      clearInterval(this.timer)
      this.$router.push({path: "/sim/" + this.user_id})
    }
  }
}
</script>

<style scoped>

</style>