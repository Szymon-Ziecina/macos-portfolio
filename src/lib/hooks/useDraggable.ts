import { useState } from "react";
import { RefObject } from "react";

interface Position {
  top: number;
  left: number;
}

const useDraggable = (
  initialTop: number,
  initialLeft: number,
  divRef: RefObject<HTMLElement>,
  dragRef: RefObject<HTMLElement>
) => {
  const [position, setPosition] = useState<Position>({
    top: initialTop,
    left: initialLeft,
  });

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target !== dragRef.current) return;

    const offsetX = event.clientX - position.left;
    const offsetY = event.clientY - position.top - 40;

    const onMouseMove = (e: MouseEvent) => {
      const parent = divRef.current?.parentElement;

      if (parent) {
        const parentRect = parent.getBoundingClientRect();

        const newLeft = Math.min(
          Math.max(e.clientX - offsetX, parentRect.left),
          parentRect.right - divRef.current!.offsetWidth
        );

        const newTop = Math.min(
          Math.max(e.clientY - offsetY, parentRect.top),
          parentRect.bottom - divRef.current!.offsetHeight
        );

        setPosition({
          top: newTop - parentRect.top,
          left: newLeft - parentRect.left,
        });
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return { position, handleMouseDown };
};

export default useDraggable;
