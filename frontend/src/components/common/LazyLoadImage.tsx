import { useEffect, useRef } from "react";

const LazyImage = ({
  src,
  alt,
  elementClass,
  style,
  rootElement,
}: {
  src: string;
  alt: string;
  elementClass?: string;
  style: React.CSSProperties;
  rootElement: HTMLElement | null;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const currentImgRef = imgRef.current;

    if (!currentImgRef) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: rootElement || null,
        threshold: 0.1,
        rootMargin: "0px 0px 50px 0px",
      }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }
  }, [src, rootElement]);

  if (!rootElement) {
    console.log("Could not find root element");
    return <></>;
  }

  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      loading="lazy"
      className={elementClass}
      style={style}
    />
  );
};

export default LazyImage;
