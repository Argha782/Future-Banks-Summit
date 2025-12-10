import { useEffect, useRef, useState } from "react";

const SectionWrapper = ({ children, animation }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Decide direction based on the animation prop string
  let hiddenTransform = "opacity-0 translate-y-6";
  let visibleTransform = "opacity-100 translate-y-0";

  if (animation?.toLowerCase().includes("left")) {
    hiddenTransform = "opacity-0 -translate-x-6";
    visibleTransform = "opacity-100 translate-x-0";
  } else if (animation?.toLowerCase().includes("right")) {
    hiddenTransform = "opacity-0 translate-x-6";
    visibleTransform = "opacity-100 translate-x-0";
  }

  return (
    <div
      ref={ref}
      className={`
        ${visible ? visibleTransform : hiddenTransform}
        transition-all duration-700 ease-out
        will-change-transform
      `}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
