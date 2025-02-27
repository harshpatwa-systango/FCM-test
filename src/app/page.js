
'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { genrateToken } from "./config/firebase";

export default function Home() {
  useEffect(()=>{
    genrateToken()
  },[])
  return (
   <div>Harsh</div>
  );
}
