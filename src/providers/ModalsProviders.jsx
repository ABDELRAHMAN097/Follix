import { createContext, useContext, useState } from "react";

const ModalsContext = createContext();

export const ModalsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <ModalsContext.Provider value={{ isOpen, openModal, closeModal, modalContent, setModalContent }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/70 animation"
            onClick={closeModal}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl animation w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </ModalsContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalsProvider');
  }
  return context;
};