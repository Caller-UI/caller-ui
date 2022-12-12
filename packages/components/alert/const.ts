const Types = ['success', 'info', 'warning', 'error']

const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent
}

export { Types, alertEmits }
