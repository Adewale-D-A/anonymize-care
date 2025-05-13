import { ReactNode, useCallback, useEffect } from "react";
import Button from "../button";
import Xicon from "@/static/icons/x";
const backdropUniqueTitle = "modal-backdrop";

export default function ModalTemplate({
  open,
  onClose,
  title,
  children,
  className,
  variant,
}: {
  open: boolean;
  onClose: (val: boolean) => void;
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "alignRight" | "alignLeft";
}) {
  // simple useEffect to capture ESC key to close the modal
  const handleClose = useCallback(() => {
    onClose?.(false);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        handleClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  const handleClickOutside = useCallback((event: any) => {
    if (event.target.title === backdropUniqueTitle) {
      handleClose();
    }
  }, []);

  if (!open) return null;

  return (
    <div
      onClick={(e) => handleClickOutside(e)}
      className={
        " w-full transition-all  fixed z-50 top-0 left-0 backgdrop-bg-filter max-h-screen h-full flex items-center justify-center"
      }
      title={backdropUniqueTitle}
    >
      <div
        title="modal-content"
        className="w-full max-w-2xl  bg-white dark:bg-dark-ash-900 h-fit max-h-[calc(100vh-100px)] overflow-y-auto p-4 lg:p-6 shadow-lg duration-200  rounded-lg"
      >
        {/* TITLE */}
        {title && (
          <div className="headline-md-b uppercase dark:text-white text-dark-ash-900 font-bold border-b  dark:border-gray-700 border-gray-200 mb-5 pb-3 flex justify-between items-center">
            <h6 className=" text-xl">{title}</h6>{" "}
            <Button
              onClick={() => handleClose()}
              className=" dark:text-red-500 hover:text-red-500 hover:scale-125 transition-all"
            >
              <Xicon />
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
