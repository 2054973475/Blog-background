import request from '@/utils/request.js';
export function upload(imgData) {
  return request({
    url: '/util/upload',
    method: 'post',
    data: {
      imgData
    }
  });
}
