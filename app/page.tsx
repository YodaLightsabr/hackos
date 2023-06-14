"use client";

import Link from "next/link"
import Typed from "typed.js"
import React from "react"
import UseConicBackground from "@/components/use-conic-background";

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

class Typing extends React.Component {
  typed: Typed | null = null;
  el: HTMLSpanElement | null = null;

  componentDidMount() {
    const options = {
      strings: ["a registration form", "a check-in system", "a calendar", "judging infrastructure", "communication networks"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2300,
      smartBackspace: false,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    if (this.typed) this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}


export default function IndexPage() {
  return (
    <div className="flex items-center h-[90vh]">
      <UseConicBackground />
      <div>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col justify-center gap-2">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Organize a hackathon, <br className="hidden sm:inline" />
          not <span className="conic-text conic-text--dim bg-[500px] bg-[500px]" style={{
            backgroundSize: '700px',
            backgroundPosition: 'top left'
          }}><Typing /></span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Plug and play infrastructure for your hackathon. Hack OS is a complete platform designed to make your hackathon a success.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={"#"}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
      </div>
    </section>
    </div>
    </div>
  )
}
