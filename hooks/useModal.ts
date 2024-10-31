"use client";

import { useState, useCallback } from 'react';

const useModal = () => {
   const [isOpen, setIsOpen] = useState(false);

   // Function to open the modal
   const openModal = useCallback(() => {
      setIsOpen(true);
   }, []);

   // Function to close the modal
   const closeModal = useCallback(() => {
      setIsOpen(false);
   }, []);

   // Toggle modal function
   const toggleModal = useCallback(() => {
      setIsOpen((prev) => !prev);
   }, []);

   return { isOpen, openModal, closeModal, toggleModal };
};

export default useModal;
