import React from "react";
const HotelContext = React.createContext();
const Provider = ({ children }) => {
    const [hotel, setHotel] = React.useState("");
    return (
        <HotelContext.Provider value={{ hotel, setHotel }}>
            {children}
        </HotelContext.Provider>
    );
};

export { HotelContext, Provider };