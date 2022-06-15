import { toast } from "react-toastify";

export function checkValidationImage(file?: FileList) {
  const bool = Object.values(file).map((img) => {
    if (!img?.size) {
      toast.warning("등록된 파일이 없어요!", {
        icon: "🥺",
      });
      return false;
    }
    if (!img?.type.includes("png") && !img?.type.includes("jpeg") && !img?.type.includes("jpg")) {
      toast.error("파일 확장자가 올바르지 않아요!", {
        icon: "🥺",
      });
      return false;
    }
  });
  if (![bool]) {
    return false;
  } else {
    return file;
  }
}
