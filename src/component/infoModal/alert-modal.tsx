"use client";

import ModalTemplate from "../dialog";
import Xicon from "@/static/icons/x";
import CheckIcon from "@/static/icons/check";
import Button from "../button";

const AlertModal = ({
  open,
  onClose,
  message,
  isError,
}: {
  open: boolean;
  onClose: (val: boolean) => void;
  message: string;
  isError?: boolean;
}) => {
  return (
    <ModalTemplate open={open} onClose={onClose}>
      <div
        className={`
          w-full flex items-center flex-col gap-5 
          ${isError ? "text-red-500" : "text-green-500"}
        `}
      >
        {isError ? (
          <Xicon className="w-24 h-24" />
        ) : (
          <CheckIcon className="w-24 h-24" />
        )}

        <h4 className={`font-semibold text-3xl`}>
          {isError ? "Error" : "Success"}
        </h4>
        <p className=" text-sm">{message}</p>
        <Button
          type="button"
          onClick={() => onClose(false)}
          className="w-fit px-5"
        >
          Okay
        </Button>
      </div>
    </ModalTemplate>
  );
};

export default AlertModal;
