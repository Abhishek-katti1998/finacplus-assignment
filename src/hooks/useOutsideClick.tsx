import { useEffect, useRef } from "react";

export function useOutsideClick({
  handler,
  listenCapturing = true,
  persistBackDrop
}: {
  handler: React.MouseEventHandler;
  listenCapturing: boolean;
  persistBackDrop: boolean;
}) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (persistBackDrop) return;
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
