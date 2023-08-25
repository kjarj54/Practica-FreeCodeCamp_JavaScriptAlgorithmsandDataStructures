function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    // Function to calculate orbital period
    function calculateOrbitalPeriod(avgAlt) {
      const a = earthRadius + avgAlt; // Semi-major axis
      const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM); // Orbital period formula
      return Math.round(T); // Round to nearest whole number
    }
  
    // Transform each object's avgAlt into orbital period
    const transformedArr = arr.map(obj => {
      return {
        name: obj.name,
        orbitalPeriod: calculateOrbitalPeriod(obj.avgAlt)
      };
    });
  
    return transformedArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);