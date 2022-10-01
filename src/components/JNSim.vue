<template>
  <div>
    <b-container class="align-middle">
      <b-row>
        <b-col class="col-md-auto">
          <div id="qrcode"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  name: "JNSim",
  data: function () {
    return {
      user_id: ""
    }
  },
  mounted() {
    if (this.$route.params["id"] !== undefined) {
      this.user_id = this.$route.params["id"]
    }
    this.qrcode = new QRCode(document.getElementById("qrcode"), {
      colorDark: "#53a351",
      width: 256,
      height: 256
    })
    this.update()
    setInterval(this.update, 4000)
  },
  methods: {
    update() {
      this.qrcode.clear()
      let qr_content = "user_" + this.user_id + "_" + Math.floor(Date.now() / 1000)
      this.qr_content = qr_content
      console.log(qr_content)

      this.qrcode.clear()
      this.qrcode.makeCode(qr_content)
    },
  }
}
</script>

<style scoped>

</style>