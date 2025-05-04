import { ref } from 'vue'
import { isFunction } from 'lodash'

type Callback = () => void

export const useModal = () => {
  const isOpen = ref<boolean>(false)

  const isPromise = (val: unknown): val is Promise<unknown> =>
    typeof val === 'object' &&
    val !== null &&
    'then' in val &&
    typeof (val as { then: unknown }).then === 'function'

  const invokeCallbacks = async (...callbacks: (Callback | Promise<void>)[]) => {
    for (const callback of callbacks) {
      if (isFunction(callback)) {
        const result = callback()
        if (isPromise(result)) {
          await result
        }
      } else if (isPromise(callback)) {
        await callback
      }
    }
  }

  const open = (...callbacks: Callback[]) => {
    invokeCallbacks(...callbacks)
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const invokeToggle = async (...callbacks: (Callback | Promise<void>)[]) => {
    try {
      await invokeCallbacks(...callbacks)
      isOpen.value = !isOpen.value
    } catch (error) {
      console.error('Error in invokeToggle:', error)
    }
  }

  const toggleInvoke = async (...callbacks: (Callback | Promise<void>)[]) => {
    isOpen.value = !isOpen.value
    await invokeCallbacks(...callbacks)
  }

  return {
    isOpen,
    open,
    close,
    toggle,
    invokeToggle,
    toggleInvoke,
  }
}
