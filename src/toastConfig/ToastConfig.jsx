import React from "react";
import { Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const ToastConfig = () => {
  return (
    <Toaster
      gutter={"-8"}
      toastOptions={{
        style: {
          fontSize: "1rem",
          fontfamily: "gilroy",
        },
        success: {
          duration: 2000,
          theme: {
            primary: "green",
            secondary: "black",
          },
          icon: <TiTick style={{ color: "lightgreen", fontSize: "1.3rem" }} />,
        },
        error: {
          icon: (
            <RxCross2
              style={{
                color: "lightpink",
                fontSize: "1.3rem",
                fontWeight: "600",
              }}
            />
          ),
          duration: 2000,
        },
      }}
    />
  );
};

export default ToastConfig;
