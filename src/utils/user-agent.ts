export const getDeviceInfo = (userAgent: string) => {
  console.log(userAgent);
  const ua = userAgent.toLowerCase();

  const isMobile = /android|iphone|ipad|ipod/i.test(ua);
  const isAndroid = /android/i.test(ua);
  const isIOS = /iphone|ipad|ipod/i.test(ua);

  return {
    isMobile,
    isAndroid,
    isIOS,
  };
};
