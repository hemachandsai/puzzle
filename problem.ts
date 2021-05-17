// you can debug the code by adding console.log statements wherever required
const start: Date | null = new Date(2021, 0, 1); // Jan 1st 2021
const end: Date | null = new Date(2021, 2, 31); // March 31st 2021

// defining the type for the isActive function so the function declaration is not messy
type IsActive = (
  monthToBeChecked: number,
  yearToBeChecked: number,
  start ? : Date | null,
  end ? : Date | null
) => boolean | null;

/**
 *
 * @param start The start date
 * @param end The end date
 * @param monthToBeChecked 0 indexed month
 * @param yearToBeChecked year in yyyy format. Example 2021
 * @returns a truthy / falsy values which indicates if the passed in month and year is active.
 *
 * passed in month and year is active if,
 * start is defined and start month = monthToBeChecked and start year = yearToBeChecked
 *                                   or
 * end is defined and end month = monthToBeChecked and end year = yearToBeChecked
 */
const isActiveMonth: IsActive = (
  monthToBeChecked,
  yearToBeChecked,
  start = null,
  end = null
) => {
  return (
    (start &&
      start.getMonth() === monthToBeChecked &&
      start.getFullYear() === yearToBeChecked) ||
    (end &&
      end.getMonth() === monthToBeChecked &&
      end.getFullYear() === yearToBeChecked)
  );
};