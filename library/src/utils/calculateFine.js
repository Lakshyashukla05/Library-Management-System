

/**
 @param {number} overdueDays 
  @returns {number} 
 */
export const calculateFine = (overdueDays) => {
  const finePerDay = 1; 
  if (overdueDays <= 0) return 0;
  return overdueDays * finePerDay;
};
