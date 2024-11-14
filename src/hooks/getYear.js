export const getExperienceYears = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export const uxExperience = getExperienceYears(2018); 
export const webDevExperience = getExperienceYears(2021);
export const designExperience = getExperienceYears(2014);