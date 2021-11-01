// @ts-nocheck
import React from "react";

export const Footer = () => {
  const url = "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    return(
      <footer>
        <a
          href={ url }
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
    </footer>


    );
}
