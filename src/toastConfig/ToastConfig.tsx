import { Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const ToastConfig = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          fontSize: "1rem",
        },
        success: {
          duration: 2000,

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
