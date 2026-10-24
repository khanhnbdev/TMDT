import { useState } from "react";

export type ProductPhoto = { src: string; label: string };

export default function ProductGallery({
  name,
  photos,
}: {
  name: string;
  photos: ProductPhoto[];
}) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const photo = photos[selected] || photos[0];
  return (
    <>
      <div className="detail-thumbs" aria-label="Product photos">
        {photos.map((entry, index) => (
          <button
            key={entry.src}
            className={selected === index ? "active" : ""}
            aria-label={`View ${entry.label}`}
            aria-pressed={selected === index}
            onClick={() => {
              setSelected(index);
              setZoomed(false);
            }}
          >
            <img src={entry.src} alt={`${name} — ${entry.label}`} />
          </button>
        ))}
      </div>
      <button
        className={`detail-hero${zoomed ? " zoomed" : ""}`}
        aria-label={zoomed ? "Zoom out product photo" : "Zoom in product photo"}
        aria-pressed={zoomed}
        onClick={() => setZoomed((value) => !value)}
      >
        <img src={photo.src} alt={`${name} — ${photo.label}`} />
        <span>{zoomed ? "Click to zoom out" : "Click to zoom in"}</span>
      </button>
    </>
  );
}
