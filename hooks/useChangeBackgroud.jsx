// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useChangeBackgroud = () => {
  const router = useRouter();

  const bigColor = useMemo(() => {
      return router.pathname === "/" ? "red" : "beige";
  }, [])

  useEffect(() => {
    //マウント時
    document.body.style.backgroundColor = bigColor;
    return () => {
      document.body.style.backgroundColor =  ""
    }
  }, [bigColor]);
}
