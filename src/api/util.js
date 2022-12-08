import request from '@/utils/request.js';
import COS from 'cos-js-sdk-v5';
export function upload(imgData) {
  return request({
    url: '/util/upload',
    method: 'post',
    data: {
      imgData
    }
  });
}
export const cos = new COS({
  async getAuthorization(options, callback) {
    request({
      method: 'get',
      url: '/util/cosConfig'
    }).then((res) => {
      const credentials = res.data.credentials;
      const callbackData = {
        TmpSecretId: credentials.tmpSecretId, // 临时密钥的 tmpSecretId
        TmpSecretKey: credentials.tmpSecretKey, // 临时密钥的 tmpSecretKey
        SecurityToken: credentials.sessionToken, // 临时密钥的 sessionToken
        StartTime: res.data.startTime,
        ExpiredTime: res.data.expiredTime // 临时密钥失效时间戳，是申请临时密钥时，时间戳加 durationSeconds
      };
      callback(callbackData);
    });
  }
});
export const Bucket = 'blog-1315594183';
export const Region = 'ap-guangzhou';
