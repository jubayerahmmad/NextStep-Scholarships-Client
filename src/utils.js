import axios from "axios";

export const imageUpload = async (imageFile) => {
  if (!imageFile) return;
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "upload");

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dbjhyikin/image/upload`,
    formData
  );

  const image_url = data.url;

  return image_url;
};
