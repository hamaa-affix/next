// @ts-nocheck
import Head from 'next/head'
import { Header } from "../compoents/Header";
import { Main } from "../compoents/Main";
import { Footer } from "../compoents/Footer";
import { useState, useCallback, useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useChangeBackgroud } from "../hooks/useChangeBackgroud";

import { Posts } from "../compoents/posts/index"


export default function Home() {
    const { count, doubleCount, isShow, handleClick, handleDisplay } = useCounter();
    const { text, array, handleChange, handleAdd } = useInputArray();
    useChangeBackgroud()

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Posts />
      
    </div>
  )
}
