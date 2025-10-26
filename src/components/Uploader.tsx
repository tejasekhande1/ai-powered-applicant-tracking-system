import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { formatSize } from "../utils.ts";

interface UploaderProps {
    onFileSelect?: (file: File | null) => void;
}

function Uploader({ onFileSelect }: UploaderProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const file = acceptedFiles[0] || null;
            onFileSelect?.(file);
            console.log("Hello");
        },
        [onFileSelect]
    );

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop,
        multiple: false,
        accept: { "application/pdf": [".pdf"] },
        maxSize: 20 * 1024 * 1024,
    });

    const file = acceptedFiles[0] || null;

    return (
        <div className={"w-full gradient-border"}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={"space-y-4 cursor-pointer"}>
                    {file ? (
                        <div
                            className={"uploader-selected-file"}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={"../../public/images/pdf.png"}
                                alt="pdf-icon"
                                className={"size-10"}
                            />

                            <div
                                className={
                                    "flex flex-row items-center space-x-3 justify-center"
                                }
                            >
                                <div className="text-gray-700">
                                    <p className="font-semibold text-base">
                                        {file.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>

                            <button
                                className={"cursor-pointer"}
                                onClick={() => onFileSelect?.(null)}
                            >
                                <img
                                    src={"/icons/cross.svg"}
                                    alt="cross-icon"
                                    className={"w-4 h-4"}
                                />
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-2">
                                <img
                                    src={"../../public/icons/info.svg"}
                                    alt="info-icon"
                                />
                            </div>

                            <p className={"text-lg text-gray-500"}>
                                <span className={"font-semibold"}>
                                    Click to upload
                                </span>{" "}
                                or drag and drop
                            </p>

                            <p className={"text-md text-gray-500"}>
                                PDF (max 20 MB)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Uploader;
