"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import navList from "./menu-values";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NavItems() {
  const navRef = useRef(null) as any;

  // const [imgUrl, setImgUrl] = useState(
  //   navList.find((item) => item?.title?.toLowerCase() === "products")
  //     ?.subMenuContent[0]?.subContentOne[0]?.img
  // );
  const [imgUrl, setImgUrl] = useState("/menu-img/healthcare_automated.jpg");
  const pathname = usePathname();
  const [offset, setOffSet] = useState({ left: 0, top: 0, width: 0 });

  //populate state with hovered sub menu content
  const [hoverContent, setHoverContent] = useState<
    {
      id: string;
      name: string;
      url: string;
      subContentOne: {
        id: string;
        name: string;
        url: string;
        description: string;
      }[];
    }[]
  >([]);
  const [openMegaMenu, setOpenMenu] = useState(true);

  //get and update state on nav menu's position on window
  useEffect(() => {
    const updateState = () => {
      const navRefPosition = navRef?.current;
      const topOffset = navRefPosition?.offsetTop;
      const leftOffset = navRefPosition?.offsetLeft;
      const parentWidth = navRefPosition?.parentElement?.clientWidth;
      setOffSet({ left: leftOffset, top: topOffset, width: parentWidth });
    };
    updateState();
    // Add a listener for changes to the screen size
    // Add the callback function as a listener for changes to the media query
    window.addEventListener("resize", updateState);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, [navRef]);

  return (
    <div className="flex gap-10 items-center " ref={navRef}>
      {navList.map((item) => {
        return (
          <div
            key={item?.title}
            className={`w-fit flex items-center gap-2 group cursor-pointer text-nowrap ${
              pathname.includes(item?.url)
                ? "border-b-4 border-primary-500 "
                : ""
            } transition-all`}
          >
            <Link
              href={item?.url}
              onMouseEnter={() => {
                setOpenMenu(true);
                setHoverContent(item.subMenuContent);
              }}
              className=" group-hover:cursor-pointer transition-all z-20 text-sm py-[18px] flex items-center gap-2"
            >
              {item?.title}
              {item?.subMenu && (
                <div className=" flex items-center">
                  <ChevronDown className="w-5 h-5 group-hover:hidden  transition-all" />
                  <ChevronUp className="w-5 h-5 hidden group-hover:block  transition-all" />
                </div>
              )}
            </Link>
            {item?.subMenu && openMegaMenu && hoverContent?.length > 0 && (
              <div className=" absolute top-0 left-0 z-10 hidden group-hover:flex text-white w-screen overflow-hidden">
                <div className="mt-24 flex justify-start items-stretch shadow-md z-10 w-full">
                  <div
                    style={{ minWidth: offset?.left - 60 }}
                    className="min-h-[calc(100vh-80px)] backdrop-bg-filter  border-gray-400"
                    onMouseEnter={() => setOpenMenu(false)}
                  ></div>
                  <div
                    // style={{ marginLeft: offset?.left }}
                    className={`w-full flex gap-4  font-semibold group-hover:flex bg-secondary/80 border-t border-gray-400`}
                  >
                    <div className="w-full ">
                      {item?.subMenuContent.map((childOne, index) => {
                        return (
                          <div
                            style={{ maxWidth: `${offset.width + 100}px` }}
                            key={childOne?.id}
                            className={`w-full group/category flex ${
                              item?.subMenuContent[index + 1]?.name
                                ? "border-b-[1px] border-[#B0B0B4]/30"
                                : ""
                            }  py-10 gap-3 text-wrap items-stretch`}
                          >
                            <Link
                              href={childOne?.url}
                              className={`pl-[60px] tsxt-sm lg:text-lg h-fit flex-[0.4] capitalize transition-all`}
                            >
                              {childOne?.name}
                            </Link>
                            <div className="flex flex-col gap-5 flex-[0.6]">
                              {childOne?.subContentOne.map((value) => {
                                return (
                                  <div
                                    key={value?.id}
                                    onMouseEnter={() => setImgUrl(value?.img)}
                                  >
                                    {value?.description ? (
                                      <div className="flex flex-col gap-4">
                                        <Link
                                          href={value?.url}
                                          className=" w-full h-fit  transition-all capitalize "
                                        >
                                          {value?.name}
                                        </Link>
                                        <Link
                                          href={value?.url}
                                          className=" w-full h-fit  transition-all font-normal  "
                                        >
                                          {value?.description}
                                        </Link>
                                      </div>
                                    ) : (
                                      <Link
                                        href={value?.url}
                                        className=" w-full h-fit  transition-all capitalize hover:underline hover:text-theme_blue"
                                      >
                                        {value?.name}
                                      </Link>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className=" w-full h-full">
                      {imgUrl && (
                        <Image
                          src={imgUrl}
                          alt="image"
                          width={1000}
                          height={1000}
                          className="  w-auto h-full items-center object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
