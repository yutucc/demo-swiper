/*
 * @Author: wuqinfa
 * @Date: 2023-10-13 17:24:34
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: 'pnpm',
});
