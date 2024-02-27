export default function bioGenerator() {
  const bios = [
    "I almost lost all faith in humanity until Drew made a website and everything was okay again.",
    "Otters hold hands while sleeping to prevent drifting apart.",
    "Baby puffins are called pufflings.",
    "Cows have best friends and can become stressed when separated from them.",
    "Sea otters have a special pocket in their fur where they keep their favorite rocks.",
    "Koalas have unique fingerprints, just like humans.",
    "Red pandas use their bushy tails as blankets to keep warm in cold weather.",
    "Guinea pigs purr when they're happy, similar to cats."
  ];
  const randomBio = bios[Math.floor(Math.random() * bios.length)];
  return randomBio;
}