"use strict";
const schedule = require("node-schedule");
const request = require("request");
require("dotenv").config();
// API_URL
const CHECKIN_URL = "https://glados.rocks/api/user/checkin";

const payload = {
  token: "glados.network",
};

const COOKIE =
  "_ga=GA1.2.132928602.1656412597; koa:sess=eyJ1c2VySWQiOjExNDI3NCwiX2V4cGlyZSI6MTY4MjMzMjYzOTgyNSwiX21heEFnZSI6MjU5MjAwMDAwMDB9; koa:sess.sig=0VwPsoECY6asXp3pHiiYXuxYIxg; _gid=GA1.2.179050917.1656899915";
if (COOKIE == process.env.COOKIE) {
  console.log("token 一致");
}
if (!COOKIE) {
  console.log("未获取到cookie");
}
const checkin_post = () => {
  console.info("开始签到");
  request(
    {
      url: CHECKIN_URL,
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "https://glados.rocks",
        cookie: COOKIE,
        // referer: "https://glados.rocks/console/checkin",
        // "user-agent":
        //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36",
        // "user-agent": "PostmanRuntime/7.29.0",
      },
      body: JSON.stringify(payload),
    },
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log(`剩余天数:${parseInt(JSON.parse(body).list[0].balance)} `);
      } else {
        console.log("签到失败,请更新COOKIE");
        console.log(error, "error");
        console.log(response.statusCode, "状态码");
        console.log(response.body, "返回体");
        // throw error || response;
      }
    }
  );
};
checkin_post();
const scheduleCronstyle = () => {
  //每分钟的第30秒定时执行一次:
  schedule.scheduleJob("* * 12 * * *", () => {
    checkin_post();
  });
  schedule.scheduleJob("* * 2 * * *", () => {
    checkin_post();
  });
  schedule.scheduleJob("* * 20 * * *", () => {
    checkin_post();
  });
};

scheduleCronstyle();
