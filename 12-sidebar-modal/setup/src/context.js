import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

    const openModal = () => {
    setIsSidebarOpen(true);
  }

  const closeModal = () => {
    setIsSidebarOpen(false);
  }

  return <AppContext.Provider 
    value={{
      isModalOpen, 
      isSidebarOpen,
      openModal,
      closeModal,
      openSidebar,
      closeModal
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}