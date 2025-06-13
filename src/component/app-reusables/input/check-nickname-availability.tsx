"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CheckIcon from "@/static/icons/check";
import CautionIcon from "@/static/icons/caution";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL;
export default function CheckNicknameAvailability({
  value,
  setValue,
}: {
  value: string;
  setValue: (val: string) => void;
}) {
  const [isAvailable, setIsAvailable] = useState(false);

  const checkNickname = useCallback(
    async (nickname: string) => {
      try {
        const response = await axios.get(
          `${BASE_URL}/nickname?nickname=${nickname}`
        );
        const result = response.data as {
          available: boolean;
          message: string;
          success: boolean;
        };
        setIsAvailable(Boolean(result?.available));
      } catch (error) {
        setIsAvailable(false);
      }
    },
    [value]
  );

  useEffect(() => {
    if (value.length > 3) {
      checkNickname(value);
    }
  }, [value]);

  return (
    <div className=" flex flex-col gap-2 w-full">
      <div className=" flex flex-col gap-2">
        <label htmlFor={"nickname"}>Nickname</label>
        <div className=" w-full flex items-stretch">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            placeholder="Nickname"
            type="text"
            id="nick-name"
            className="w-full shadow-none rounded-l-md border  p-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-dark-ash-700 border-none text-white placeholder:text-dark-ash-500"
          />
          {value && (
            <>
              {(value.length < 4 || !isAvailable) && (
                <div className=" w-12 bg-red-500 rounded-r-md flex justify-center items-center">
                  <CautionIcon />
                </div>
              )}
              {isAvailable && (
                <div className=" w-12 bg-primary rounded-r-md flex justify-center items-center">
                  <CheckIcon />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {value && (
        <div className=" flex justify-end w-full">
          {value && value.length < 4 && (
            <p className=" text-red-500 text-sm flex items-center gap-2">
              <CautionIcon /> Nickname character lenght must be between 3 - 20
              characters.
            </p>
          )}
          {isAvailable && value.length > 3 && (
            <p className=" text-primary text-sm flex items-center gap-2">
              <CheckIcon /> {value} is available.
            </p>
          )}
          {!isAvailable && value.length > 3 && (
            <p className=" text-red-500 text-sm flex items-center gap-2">
              <CautionIcon /> {value} not available.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
