export default function usernameGenerator() {
  const adjectives = ["Happy", "Silly", "Brave", "Clever", "Gentle", "Lucky", "Fierce", "Kind", "Witty", "Bright"];
  const nouns = ["Squirrel", "Penguin", "Dragon", "Tiger", "Phoenix", "Wizard", "Ninja", "Unicorn", "Pirate", "Robot"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return randomAdjective + randomNoun;
}