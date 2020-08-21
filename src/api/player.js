import { api_path, players } from "./api-config";
console.log(api_path, players);


/*
TO BE IMPLEMENTED
fetch(API + DEFAULT_QUERY)
      .then((response) => response.json())
      .then((data) => this.setState({ stocks: data }))
      .catch((e) => console.log(e));

    fetch(API + GET_PLAYER, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          let name = prompt("Vad fan heter du?!");
          fetch(API + CREATE_PLAYER + "?name=" + name)
            .then((response) => response.json())
            .then((data) => {
              this.setState({ player: data });
              document.cookie = `id=${data.id}; expires=Thu, 18 Dec 2099 12:00:00 UTC`;
            });
        } else {
          this.setState({ player: data });
        }
      });
*/