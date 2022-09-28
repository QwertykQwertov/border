import DataSource from "devextreme/data/data_source";

export default {
  allMessages: new DataSource({
    key: "transport_type",
    load() {
      return fetch("http://relocate.artydev.ru:8000/api/v1/stats_all_time")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          data.forEach((el, index) => {
            data[index].cnt = el.success_cnt + el.failed_cnt
          } )
          return data;
        });
    },
  }),
  stats: new DataSource({
    key: "transport_type",
    load() {
      return fetch("http://relocate.artydev.ru:8000/api/v1/stats")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          data = data.filter(el => el.message_dt > '2022-09-20T00:00:00Z')
          data.forEach((el, index) => {
            data[index].cnt = el.success_cnt + el.failed_cnt
            data[index].message_dt = el.message_dt.slice(0,10)
          } )

          return data;
        });
    },
  }),
  transport: new DataSource({
    key: "transport_type",
    load() {
      return fetch("http://relocate.artydev.ru:8000/api/v1/transport")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          data = data.filter((el) => {
            return el.message_dt === "2022-09-28T00:00:00Z"
          } )
          return data;
        });
    },
  }),
  airports: new DataSource({
    key: "transport_type",
    load() {
      return fetch("http://relocate.artydev.ru:8000/api/v1/airport")
        .then((response) => {
          return response.json();
        })
        .then((data) => {

          data = data.filter((el) => {
            return el.message_dt === "2022-09-28T00:00:00Z"
          } )
          console.log(data, "AIRPORTS");
          return data;
        });
    },
  }),
};
