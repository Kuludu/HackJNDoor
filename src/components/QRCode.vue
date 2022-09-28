<template>
  <div>
    <b-container class="align-middle">
      <b-row>
        <b-form-input v-model="user_id" placeholder="请输入用户ID" class="mb-3"></b-form-input>
      </b-row>
      <b-row>
        <b class="mb-3">二维码内容值：{{ qr_content }}</b>
      </b-row>
      <b-row>
        <b-button @click="start" class="mb-3">开始模拟二维码(强制刷新)</b-button>
      </b-row>
      <b-row>
        <b-col>
          <div id="qrcode"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'

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
  mounted() {
    this.qrcode = new QRCode(document.getElementById("qrcode"))
  },
  methods: {
    start() {
      this.update()
      clearInterval(this.timer)
      this.timer = setInterval(this.update, 7000)
    },
    update() {
      this.qrcode.clear()
      let qr_content = "user_" + this.user_id + "_" + Math.floor(Date.now() / 1000)
      this.qr_content = qr_content
      console.log(qr_content)

      this.qrcode.clear()
      this.qrcode.makeCode(qr_content)
    }
  }
}
</script>

<style scoped>

</style>