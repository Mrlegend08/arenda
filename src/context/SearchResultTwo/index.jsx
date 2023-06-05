import React from "react";
const SwiperContext = React.createContext();
const Provider = ({ children }) => {
    const [swiperHotel, setSwiperHotel] = React.useState("");
    return (
        <SwiperContext.Provider value={{ swiperHotel, setSwiperHotel }}>
            {children}
        </SwiperContext.Provider>
    );
};

export { SwiperContext, Provider };