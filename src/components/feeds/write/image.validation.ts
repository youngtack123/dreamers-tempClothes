export function checkValidationImage(file?: FileList) {
  const bool = Object.values(file).map((img) => {
    if (!img?.size) {
      alert("파일이 없습니다.");
      return false;
    }
    if (!img?.type.includes("png") && !img?.type.includes("jpeg") && !img?.type.includes("jpg")) {
      alert("파일 확장자가 올바르지 않습니다.(png, jpeg, jpg만 가능)");
      return false;
    }
  });
  if (![bool]) {
    return false;
  } else {
    return file;
  }
}
