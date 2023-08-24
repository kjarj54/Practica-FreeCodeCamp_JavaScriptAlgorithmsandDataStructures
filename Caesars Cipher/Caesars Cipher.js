function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
      const charCode = char.charCodeAt(0);
      const baseCharCode = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      return String.fromCharCode(baseCharCode + ((charCode - baseCharCode + 13) % 26));
    });
  }
  
  const decodedString = rot13("SERR PBQR PNZC");