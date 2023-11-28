/**
 * 获取本地图
 * @param folder // 文件夹名字 如 /static/images/home
 * @param fileName // 文件名 如 home-bg
 * @param format // 文件类型 如 png jpg
 * @returns {*|string}
 */
 
// #ifdef MP-WEIXIN
const urlTobase64 = (folder, fileName, format) => {
  let img = `/static/${folder}/${fileName}.${format}`,
    imgBase64 = wx.getFileSystemManager().readFileSync(img, "base64"),
    base64Url = `data:image/${format=='svg'?'svg+xml' : format};base64,${imgBase64}`;
  return base64Url;
};
// #endif
 
export default urlTobase64;

