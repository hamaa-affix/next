// @ts-ignore
import { useState, useCallback } from "react"

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if(e.target.value > 5) {
      alert("５文字以内で入力してください")
      return
    }

      setText(e.target.value.trim());
    }, [])

    const handleAdd = useCallback( () => {
      setArray(prevArray => {
        if(prevArray.some(item => item === text)) {
          alert('same')
          return prevArray
        }
        const newArray = [...prevArray, text]
        return newArray;
      });
    }, [text]);

      return {text, array, handleAdd, handleChange}
}
