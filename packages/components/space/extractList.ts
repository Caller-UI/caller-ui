import { VNode, Fragment, isVNode } from 'vue'

/**
 * isFragment: 判断一个节点是不是Fragment节点
 * Fragment节点: <xx v-for="item of list" ... > {{ item }} </xx>
 * node: 虚拟节点
 */
export function isFragment(node: VNode): boolean {
  return isVNode(node) && node.type === Fragment
}

/** 清洗slot数据 */
export const extractList = (list: VNode[]) => {
  let arr: VNode[] = []
  list.forEach((item) => {
    isFragment(item) && Array.isArray(item.children) ? (arr = [...arr, ...extractList(item.children as VNode[])]) : arr.push(item)
  })
  return arr
}
