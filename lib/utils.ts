// Utilities

namespace Utils {
  
  export const Project: string = "aespacore"

  export const short: Function = (text: string): string => {
    let length: number = 25
    if (text.length > length) {
      return `${text.slice(0,length).trim()}...`
    } else {
      return text
    }
  }
}

export default Utils