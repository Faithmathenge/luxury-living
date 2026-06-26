console.log("This Is The Tax Calculator File");

let grossMonthlySalary = null;

while (true) {
  let gross = prompt("Enter your gross salary");

  if (!isNaN(gross)) {
    gross = Number(gross);

    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }

  alert(`Invalid amount entered.
Ensure you enter a number greater than 0`);
}

console.log(
  `Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}.`,
);

// Calculate PAYE

let paye = null;

let currentTier = null;

// Determine the current tax tier
if (grossMonthlySalary <= 24000) {
  currentTier = 1;
} else if (grossMonthlySalary <= 32333) {
  currentTier = 2;
} else if (grossMonthlySalary <= 500000) {
  currentTier = 3;
} else if (grossMonthlySalary <= 800000) {
  currentTier = 4;
} else {
  currentTier = 5;
}

// Tier 1
if (currentTier === 1) {
  paye = grossMonthlySalary * (10 / 100);
}

// Tier 2
if (currentTier === 2) {
  let tier1 = 24000 * (10 / 100);
  let rem = grossMonthlySalary - 24000;

  paye = tier1 + rem * (25 / 100);
}

// Tier 3
if (currentTier === 3) {
  let tier1 = 24000 * (10 / 100);
  let tier2 = (32333 - 24000) * (25 / 100);
  let rem = grossMonthlySalary - 32333;

  paye = tier1 + tier2 + rem * (30 / 100);
}

// Tier 4
if (currentTier === 4) {
  let tier1 = 24000 * (10 / 100);
  let tier2 = (32333 - 24000) * (25 / 100);
  let tier3 = (500000 - 32333) * (30 / 100);
  let rem = grossMonthlySalary - 500000;

  paye = tier1 + tier2 + tier3 + rem * (32.5 / 100);
}

// Tier 5
if (currentTier === 5) {
  let tier1 = 24000 * (10 / 100);
  let tier2 = (32333 - 24000) * (25 / 100);
  let tier3 = (500000 - 32333) * (30 / 100);
  let tier4 = (800000 - 500000) * (32.5 / 100);
  let rem = grossMonthlySalary - 800000;

  paye = tier1 + tier2 + tier3 + tier4 + rem * (35 / 100);
}

alert(`PAYE is ${paye}`);

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1;
const band2 = (bracket2 - bracket1) * 0.25;
const band3 = (bracket3 - bracket2) * 0.3;
const band4 = (bracket4 - bracket3) * 0.325;

const personal_relief = 2400;

// NSSF Calculation
let nssf = 0;
let nssfTier = "";

if (grossMonthlySalary < 9000) {
  nssf = grossMonthlySalary * 0.06;
  nssfTier = "Below 9000";
} else {
  const firstTier = 9000 * 0.06;
  const remaining = (grossMonthlySalary - 9000) * 0.06;

  nssf = firstTier + remaining;
  nssfTier = "Above 9000";
}

alert(`NSSF is ${nssf} and Tier is ${nssfTier}`);

const taxableIncome = grossMonthlySalary - nssf;

if (taxableIncome <= 24000) {
  paye = taxableIncome * 0.1;
  paye_tier = "Paye 0-24000 KES";
} else if (taxableIncome <= 32333) {
  let diff = taxableIncome - 24000;
  let tax = diff * 0.25;
  paye = tax + band1;
  paye_tier = "Paye 24000-32333 KES";
} else if (taxableIncome <= 500000) {
  let diff = taxableIncome - 32333;
  let tax = diff * 0.3;
  paye = tax + band1 + band2;
  paye_tier = "Paye 32333-500000 KES";
} else if (taxableIncome <= 800000) {
  let diff = taxableIncome - 500000;
  let tax = diff * 0.325;
  paye = tax + band1 + band2 + band3;
  paye_tier = "Paye 500000-800000 KES";
} else {
  let diff = taxableIncome - 800000;
  let tax = diff * 0.35;
  paye = tax + band1 + band2 + band3 + band4;
  paye_tier = "Paye 800000 to infinity KES";
}

const final_paye = Math.max(0, paye - personal_relief);

alert(`
Taxable Income ${taxableIncome}
Paye ${paye}
Personal Relief ${personal_relief}
Final Paye ${final_paye}
Tier ${paye_tier}
`);

// SHIF
const shif = grossMonthlySalary * (2.75 / 100);

// Housing Levy
const housingLevy = grossMonthlySalary * (1.5 / 100);

// Total deductions
const totalDeduction = final_paye + nssf + shif + housingLevy;

// Net salary
const netSalary = grossMonthlySalary - totalDeduction;

// Display all deductions
alert(`
Gross Salary ${grossMonthlySalary}

NSSF ${nssf}
SHIF ${shif}
Housing Levy ${housingLevy}

PAYE ${final_paye}

Total Deductions ${totalDeduction}

Net Salary ${netSalary}
`);
