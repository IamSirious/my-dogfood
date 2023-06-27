import { createContext } from "react";

export default createContext({
    name: "Sergey",
    theme: "DARK",
    getRandom: (max = 11, min = 0) => {
        // Случайное число от 0 до 10 или свои варианты
        Math.floor(Math.random() * (max - min) + min)
    },
    // TODO: создать контекст для корзины, работающий с LS
    user: {},
    setUser: () => {},
    token: "",
    setToken: () => {},
    api: {},
    setApi: () => {},
    goods: [],
    setGoods: () => {},
    visibleGoods: [],
    setVisibleGoods: () => {},
    modalActive: false,
	searchResult: "",
    setModalActive: () => {},
    favorites: [],
    setFavorites: () => {},
    basket: [],
    setBasket: () =>{}
});