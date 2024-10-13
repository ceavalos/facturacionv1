"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from 'primereact/button';

export default function Home() {

  const handleClick = ()=>{{
    alert("Hello world!");
  }};

  return (
    <>
      <h1> desde principal</h1>
      <Button label="Click Me" icon="pi pi-check" onClick= {handleClick} className="p-button-success" />
    </>
  );
}
