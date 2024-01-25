import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(); // Cambia el nombre del contexto

export function useAppContext() {
  return useContext(AppContext);
}

export function ProviderAppContext({ children }) {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  // Otras configuraciones y lógica del contexto

  return (
    <AppContext.Provider value={{ favoritePhotos, setFavoritePhotos }}>
      {children}
    </AppContext.Provider>
  );
}
