export type MapValue = {
  text: string
  url: string
}

const IndexMap = new Map<string, MapValue>([
  ['按钮button', { text: '按钮 Button', url: '/component/button' }],
  ['表格table', { text: '表格 Table', url: '/component/table' }],
  ['输入框input', { text: '输入框 Input', url: '/component/input' }],
  ['选项卡tabs', { text: '选项卡 Tabs', url: '/component/table' }],
  ['图标icon', { text: '图标 Icon', url: '/component/icon' }]
])

const searchIndexMap = (keyword: string) => {
  const iterator = IndexMap.keys()
  const result: any[] = []
  let item = iterator.next()
  do {
    if (item.value && item.value.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) !== -1) result.push(IndexMap.get(item.value))
    item = iterator.next()
  } while (!item.done)
  return result
}

export { IndexMap, searchIndexMap }
