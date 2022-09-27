import DataSource from "devextreme/data/data_source";

export default {
  dataSource: new DataSource({
    key: "transport_type",
    load() {
      return fetch("https://6332e6eaa54a0e83d25b4ff9.mockapi.io/border/borders")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        });
    },
  }),
};
