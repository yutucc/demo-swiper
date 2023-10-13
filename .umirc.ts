/*
 * @Author: wuqinfa
 * @Date: 2023-10-13 17:24:34
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/showroom', component: 'showroom' },
    
    { path: '/', redirect: '/showroom',},
  ],
  npmClient: 'pnpm',
});
