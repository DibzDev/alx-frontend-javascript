// Task 11: Brand convention & Nominal typing

// MajorCredits interface
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

// sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}

// Test examples
const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };

const minor1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 1, __brand: 'MinorCredits' };

console.log('Major credits sum:', sumMajorCredits(major1, major2));
console.log('Minor credits sum:', sumMinorCredits(minor1, minor2));