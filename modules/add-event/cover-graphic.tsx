import React, { useRef, useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/index";

const MAX_SIZE = 15728640; // 15MB;

export const CoverGraphic = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [dropping, setDropping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { updateBanner, addEvent } = useStore();
  const { banner } = addEvent;

  const validateFileSize = (file: File) => {
    if (file.size > MAX_SIZE) return new Error("File is too big");
  };

  const getBanner = (files: FileList | null) => {
    if (!files?.length) return;

    const file = files[0];
    const isValid = validateFileSize(file);
    if (!!isValid?.name) return setError(isValid.message);

    setError(null);

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (readerEvent) => {
      updateBanner(readerEvent.target?.result);
    };
  };

  const clearPickedImage = () => updateBanner(null);

  const pickFileFromDisk = () => {
    if (!fileInput.current) return;

    fileInput.current.click();
  };

  return (
    <div className="w-[740px] rounded-16 max-w-full h-[185px] flex flex-col justify-center overflow-hidden relative">
      {banner && (
        <button
          onClick={clearPickedImage}
          className="absolute right-2 top-2 z-[10] h-9 w-9 bg-red rounded-12"
        >
          remove
        </button>
      )}
      {banner ? (
        <Image src={banner} alt="uploaded image" width={740} height={185} />
      ) : (
        <div
          role="button"
          onClick={pickFileFromDisk}
          className="w-full rounded-16 max-w-full h-full flex flex-col justify-center items-center bg-primary-blue text-white relative"
          onDragEnter={() => setDropping(true)}
          onDragOver={(event) => event.preventDefault()}
          onDragLeave={() => setDropping(false)}
          onDrop={(event) => {
            event.preventDefault();
            getBanner(event.dataTransfer.files);
            setDropping(false);
          }}
        >
          {dropping ? (
            <p className="text-2xl font-bold">Drop like it is hot!</p>
          ) : (
            <p className="text-2xl font-bold">
              Drop here file or click to choose from disk
            </p>
          )}

          <p className="font-normal">
            The file should end in: .jpg, .jpeg or .png and has less than 15MB.
          </p>

          <input
            ref={fileInput}
            type="file"
            onChange={(event) => getBanner(event.target.files)}
            className="hidden absolute"
            accept="image/png, image/jpg"
          />
        </div>
      )}

      {error && <p className="text-red">{error}</p>}
    </div>
  );
};
