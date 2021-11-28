// @ts-nocheck
import Head from 'next/head'
import { Header } from "../../../../compoents/Header";
import { useCounter } from "../../../../hooks/useCounter";
import { useInputArray } from "../../../../hooks/useInputArray";
import { useChangeBackgroud } from "../../../../hooks/useChangeBackgroud";

//router
import { useRouter } from "next/router";



const PostId = () => {
    const { count, doubleCount, isShow, handleClick, handleDisplay } = useCounter();
    const { text, array, handleChange, handleAdd } = useInputArray();
    useChangeBackgroud()

    const query = useRouter();
    console.log(query.query.id)


  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="text-red-500">
        テスト
      </div>
      <div>{query.query.id}</div>
    </div>
  )
}

export default PostId;
