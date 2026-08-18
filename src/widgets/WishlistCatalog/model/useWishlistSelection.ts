import {useState} from "react";


const useWishlistSelection = (allIds: number[]) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<Set<number>>(new Set());

  const toggleItem = (itemId: number)=> {
    setSelectedCheckbox(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const isAllSelected = selectedCheckbox.size === allIds.length && allIds.length > 0;


  const isSelected = (itemId: number) => {
    return selectedCheckbox.has(itemId);
  };

  const selectAll = () => {
    if (isAllSelected) {
      setSelectedCheckbox(new Set()); // всё выбрано -> снимаем всё
    } else {
      setSelectedCheckbox(new Set(allIds)); // не всё выбрано -> выбираем всё
    }
  };

  return {
    selectedCheckbox,
    toggleItem,
    isSelected,
    selectAll,
    isAllSelected,
  }
}

export default useWishlistSelection