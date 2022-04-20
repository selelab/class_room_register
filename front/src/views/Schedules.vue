<template>
  <div>
    <div>URL</div>
    <input type="text" v-model="FORM_URL" />

    <div>年</div>
    <input type="text" v-model="YEAR" />
    <div>月</div>
    <input type="text" v-model="MONTH" />

    <h2>Let's input schedule</h2>
    <h3>日</h3>
    <input type="text" v-model="DAY" />
    <h3>
      教室名 1-407のように記入（略称 : 1:1号館、11:11号館、14:14号館、k:紀尾井）
    </h3>
    <input type="text" v-model="CLASS_ROOM" />
    <h3>時間（HH:MM〜HH:MMで記入）</h3>
    <input type="text" v-model="TIME" />
    <h3>特記事項（空欄でもよい）</h3>
    <input type="text" v-model="NOTICES" />

    <div>
      <button v-on:click="Add">追加</button>
      <button v-on:click="Submit">確定</button>
    </div>
    <div></div>
    <div v-for="sched in SCHEDULE" v-bind:key="sched">
      <div>
        {{ sched.DAY }}日：{{ sched.CLASS_ROOM }}教室 : {{ sched.TIME }}
      </div>
    </div>
    <!-- <button v-on:click="send">実行</button> -->
  </div>
</template>
<script>
// import { throwStatement } from "@babel/types";

export default {
  data() {
    return {
      FORM_URL: "",
      YEAR: "",
      MONTH: "",
      DAY: "",
      CLASS_ROOM: "",
      TIME: "",
      NOTICES: "",
      SCHEDULE: [],
    };
  },
  methods: {
    Add: function () {
      let plan = {
        DAY: this.DAY,
        CLASS_ROOM: this.CLASS_ROOM,
        TIME: this.TIME,
        NOTICES: this.NOTICES,
      };
      if (this.DAY && this.CLASS_ROOM && this.TIME) {
        if (this.SCHEDULE) {
          this.SCHEDULE.push(plan);
          this.DAY = "";
          this.CLASS_ROOM = "";
          this.TIME = "";
          this.NOTICES = "";
        } else {
          this.SCHEDULE = [plan];
        }
      }
    },
    Submit: function () {
      const set = {
        URL: this.FORM_URL,
        YEAR: this.YEAR,
        MONTH: this.MONTH,
        SCHEDULE: this.SCHEDULE,
      };
      localStorage.setItem("schedule", JSON.stringify(set));
    },
    send: function () {},
  },
  created() {
    const get = localStorage.getItem("schedule");
    const setToInput = JSON.parse(get);
    if (setToInput) {
      this.FORM_URL = setToInput.URL;
      this.YEAR = setToInput.YEAR;
      this.MONTH = setToInput.MONTH;
      this.SCHEDULE = setToInput.SCHEDULE;
    } else {
      localStorage.setItem("schedule", "[]");
    }
  },
};
</script>
