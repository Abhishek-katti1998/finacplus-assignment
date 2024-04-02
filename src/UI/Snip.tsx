import React, { useState } from "react";
import ReactCrop, { type Crop } from "react-image-crop";

export default function Snip({ children }: { children: React.ReactNode }) {
  const [crop, setCrop] = useState<Crop>();
  return (
    <ReactCrop crop={crop} onChange={(c) => setCrop(c)} minHeight={100}>
      {children}
    </ReactCrop>
  );
}
