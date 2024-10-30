import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const ResumeButton = ({
  title,
  icon,
  position,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
}) => {
  const handleDownload = async () => {
    const zip = new JSZip();

    // Fetching the files and adding them to the zip
    const engFile = await fetch("/pdf/eng.pdf").then((res) => res.blob());
    const frcFile = await fetch("/pdf/frc.pdf").then((res) => res.blob());

    zip.file("eng.pdf", engFile);
    zip.file("frc.pdf", frcFile);

    // Generating the zip file and triggering the download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "resumes.zip");
    });
  };

  return (
    <button
      onClick={handleDownload} // Trigger download on button click
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff80b5_0%,#ff3d79_50%,#ff80b5_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-black px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default ResumeButton;
