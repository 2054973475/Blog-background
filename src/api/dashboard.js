import request from '@/utils/request.js';
export function getDashboardNumber() {
  return request({
    url: '/dashboard/getDashboardNumber',
    method: 'get'
  });
}
export function getBlogClassifyAnalysisData() {
  return request({
    url: '/dashboard/getBlogClassifyAnalysisData',
    method: 'get'
  });
}
export function getBlogTagsAnalysisData() {
  return request({
    url: '/dashboard/getBlogTagsAnalysisData',
    method: 'get'
  });
}
export function getArticleAccessTop() {
  return request({
    url: '/dashboard/getArticleAccessTop',
    method: 'get'
  });
}
export function getRecentArticles() {
  return request({
    url: '/dashboard/getRecentArticles',
    method: 'get'
  });
}
export function getRecentComments() {
  return request({
    url: '/dashboard/getRecentComments',
    method: 'get'
  });
}
