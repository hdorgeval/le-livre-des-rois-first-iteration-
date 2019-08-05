declare const Blob: new (
  blobParts?: BlobPart[] | undefined,
  options?: BlobPropertyBag | undefined,
) => Blob;
declare const document: Document;

export function downloadSvg(d3Container: React.MutableRefObject<null>): void {
  const svgElement = (d3Container.current as unknown) as SVGElement;
  const svgData = svgElement.outerHTML;
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = 'diagram.svg';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
