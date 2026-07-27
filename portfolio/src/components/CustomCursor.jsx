import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let ringX = 0, ringY = 0, dotX = 0, dotY = 0;
    let mouseX = 0, mouseY = 0;
    let raf;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnterInteractive = () => ringRef.current?.classList.add("!w-12", "!h-12", "!border-cyan-400");
    const onLeaveInteractive = () => ringRef.current?.classList.remove("!w-12", "!h-12", "!border-cyan-400");

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("a, button, input, textarea, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" aria-hidden="true" />
    </>
  );
}
