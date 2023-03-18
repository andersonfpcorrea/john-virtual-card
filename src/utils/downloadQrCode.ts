export const downloadQrCode = (
  href: string,
  fileName: string,
  anchorRef: React.MutableRefObject<HTMLAnchorElement | null>
): void => {
  const link = anchorRef.current;
  if (link !== null) {
    link.download = fileName;
    link.href = href;
    console.log(href);
    link.click();
  }
};
