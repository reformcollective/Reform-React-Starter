import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  selector: string;
};

const scrollOptions = {
  smooth: true,
  getDirection: true,
  touchMultiplier: 1,
  multiplier: 1.2,
  lerp: 0.1,
  firefoxMultiplier: 100,
  getSpeed: true,
  resetNativeScroll: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
};

const Scroll: React.FC<Props> = ({ selector }) => {
  useEffect(() => {
    const smoothScroll = document.querySelector(selector);

    if (smoothScroll) {
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(selector),
        ...scrollOptions,
      });

      locomotiveScroll.update();

      // Exposing to the global scope for ease of use.
      window.locomotiveScroll = locomotiveScroll;

      locomotiveScroll.on("scroll", (obj: any) => {
        window.speed = 0;
        let newSpeed = Math.min(Math.max(obj.speed.toFixed(2), -10), 10);
        if (window.speed !== newSpeed) window.speed = newSpeed;

        ScrollTrigger.update();
      });
      locomotiveScroll.on("call", (name: string, dir: string) => {
        const event = new Event(`${name}-${dir}`);
        window.dispatchEvent(event);
      });

      const smoothScroll: HTMLElement | null = document.querySelector(selector);

      ScrollTrigger.scrollerProxy(selector, {
        scrollTop(value: any) {
          return arguments.length
            ? locomotiveScroll.scrollTo(value, 0, 0)
            : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: smoothScroll?.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () =>
        locomotiveScroll.update()
      );
      ScrollTrigger.refresh();

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, [selector]);

  return null;
};

export default Scroll;
