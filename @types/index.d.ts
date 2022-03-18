declare module "locomotive-scroll"
declare module "gsap"
declare module "gsap/all"
declare module "gsap/ScrollTrigger"

declare global {
  interface Window {
    locomotiveScroll: any
    speed: number
  }
}

