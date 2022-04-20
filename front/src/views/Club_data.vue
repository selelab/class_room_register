<template>
  <div>
    <h2>Let's input club data</h2>
    <h3>サークル名（正式名称）</h3>
    <input type="text" v-model="CLUB_NAME" />
    <h3>名前</h3>
    <input type="text" v-model="REPRESENT_NAME" />
    <h3>学籍番号</h3>
    <input type="text" v-model="STUDENT_NUMBER" />
    <h3>メールアドレス</h3>
    <input type="text" v-model="MAIL" />
    <h3>電話番号</h3>
    <input type="text" v-model="TEL" />
    <div>
      <button v-on:click="Submit">確定</button>
    </div>
  </div>
</template>
<script>
// import { throwStatement } from "@babel/types";

export default {
  name: "Club_data",
  data() {
    return {
      CLUB_NAME: "",
      REPRESENT_NAME: "",
      STUDENT_NUMBER: "",
      MAIL: "",
      TEL: "",
    };
  },
  methods: {
    Submit: function () {
      const set = {
        CLUB_NAME: this.CLUB_NAME,
        REPRESENT_NAME: this.REPRESENT_NAME,
        STUDENT_NUMBER: this.STUDENT_NUMBER,
        MAIL: this.MAIL,
        TEL: this.TEL,
      };

      localStorage.setItem("club_data", JSON.stringify(set));
    },
  },
  created() {
    const get = localStorage.getItem("club_data");
    const setToInput = JSON.parse(get);
    if (setToInput) {
      this.CLUB_NAME = setToInput.CLUB_NAME;
      this.REPRESENT_NAME = setToInput.REPRESENT_NAME;
      this.STUDENT_NUMBER = setToInput.STUDENT_NUMBER;
      this.MAIL = setToInput.MAIL;
      this.TEL = setToInput.TEL;
    } else {
      localStorage.setItem("clubdata", "[]");
    }
  },
};
</script>
