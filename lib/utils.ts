// Utilities

namespace Utils {
  
  export const Project: string = "aespacore"

  export const short: Function = (text: string): string => {
    let edit: string = `${text.slice(0,25).trim()}...`
    return edit
  }
}

export default Utils