import DataSource from "devextreme/data/data_source";

export default {
  allMessages: new DataSource({
    key: "transport_type",
    load() {
      return fetch("https://border-api.artydev.ru/api/v1/stats_all_time")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.forEach(
            (el, index) =>
              (data[index].success_percent = el.success_percent + "%")
          );
          return data;
        });
    },
  }),
  stats: new DataSource({
    key: "transport_type",
    load() {
      return fetch("https://border-api.artydev.ru/api/v1/stats")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.sort((a, b) => {
            if (a.message_dt === b.message_dt) {
              return 0;
            } else {
              return a.message_dt > b.message_dt ? 1 : -1;
            }
          });

          return data;
        });
    },
  }),
  transport: new DataSource({
    key: "transport_type",
    load() {
      return fetch("https://border-api.artydev.ru/api/v1/transport")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const today = new Date();
          data.forEach(
            (el, index) =>
              (data[index].success_percent =
                ((el.success_cnt / el.cnt) * 100).toFixed(2) + "%")
          );
          data = data.filter((el) => {
            return el.message_dt === today.toISOString().slice(0, 10);
          });
          return data;
        });
    },
  }),
  airports: new DataSource({
    key: "transport_type",
    load() {
      let today= new Date()
      today = today.toISOString().slice(0,10)
      return fetch(`https://border-api.artydev.ru/api/v1/airport?begin_date=${today}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },  }),
  airportsAllTime: new DataSource({
    key: "transport_type",
    load() {
      return fetch("https://border-api.artydev.ru/api/v1/airport_all_time")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
  }),
  destinationsAllTime: new DataSource({
    key: "transport_type",
    load () {
      return fetch("https://border-api.artydev.ru/api/v1/destination_all_time")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.sort((a,b) => b.cnt - a.cnt)
          return data;
        });
    },
  }),
  destinationsToday: new DataSource({
    key: "transport_type",
    load () {
      let today = new Date()
      today = today.toISOString().slice(0, 10)
      return fetch(`https://border-api.artydev.ru/api/v1/destination?begin_date=${today}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.sort((a,b) => b.cnt - a.cnt)
          return data;
        });
    },
  }),
};
