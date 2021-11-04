import { useEffect } from "react"

export const useChangeBackgroud = () => {
  useEffect(() => {
    //マウント時
    document.body.style.backgroundColor =  "red"
    return () => {
      document.body.style.backgroundColor =  ""
    }
  }, [])
}
