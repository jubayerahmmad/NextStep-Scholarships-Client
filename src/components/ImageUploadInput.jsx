const ImageUploadInput = ({ handleFileChange, imageFile }) => {
  return (
    <>
      <input
        type="file"
        name="image"
        id="imageFile"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="imageFile">
        <div className="w-full border-4 border-dashed px-2 py-4 rounded-xl">
          <p className="text-black bg-teal-50 text-sm flex items-center gap-2 px-4 py-2 rounded-md border w-fit mx-auto">
            {imageFile === ""
              ? `Upload Image *`
              : `${
                  imageFile?.name.length < 15
                    ? imageFile?.name
                    : `${imageFile?.name.slice(0, 15)}...${
                        imageFile?.type.split("/")[1]
                      }`
                }`}
          </p>
        </div>
      </label>
    </>
  );
};

export default ImageUploadInput;
