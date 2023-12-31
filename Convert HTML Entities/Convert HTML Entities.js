function convertHTML(str) {
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
  
    return str.replace(/[&<>"']/g, char => htmlEntities[char]);
  }
  
  convertHTML("Dolce & Gabbana");