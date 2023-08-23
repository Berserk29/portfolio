export const debounce = (callbackFn, delay = 250) => {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callbackFn(...args)
        }, delay)
    }

}

export const throttle = (callbackFn, delay = 250) => {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        callbackFn(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      callbackFn(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
}

