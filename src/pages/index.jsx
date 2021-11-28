// @ts-nocheck
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useChangeBackgroud } from "src/hooks/useChangeBackgroud";

import { Posts } from "src/compoents/posts/index"


export default function Home() {
    const { count, doubleCount, isShow, handleClick, handleDisplay } = useCounter();
    const { text, array, handleChange, handleAdd } = useInputArray();
    useChangeBackgroud()

  return (
    <div className="container">
      <Posts />

    </div>
  )
}
