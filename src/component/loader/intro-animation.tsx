"use client";
import Loading from "@/app/loading";
import { ReactNode, useEffect, useState } from "react";
// import { disableAnimation } from "@/store/app-fucntions/pageAnimation";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function PageDelayLoader({ children }: { children: ReactNode }) {
  // const dispatch = useAppDispatch()
  //     const {animation_done} = useAppSelector((state) => state.pageAnimation.value);

  //countdown states
  const [seconds, setSeconds] = useState(4);
  const [isCountdownDone, setIsCountdownDone] = useState(false);
  //set countdown timer
  useEffect(() => {
    const animation_done = sessionStorage.getItem("animation_done");
    if (!animation_done) {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setIsCountdownDone(true);
        sessionStorage.setItem("animation_done", "true");
        //   dispatch(disableAnimation())
        // sessionStorage.removeItem('animation_done');
      }
    } else {
      setIsCountdownDone(true);
    }
  });

  return <>{isCountdownDone ? children : <Loading />}</>;
}
