// Utilities

namespace Utils {
  
  export const Project: string = "aespacore"

  export const short: Function = (text: string, length: number | null): string => {
    let len = length || 25
    if (text.length > len) {
      return `${text.slice(0,len).trim()}...`
    } else {
      return text
    }
  }
}

export default Utils