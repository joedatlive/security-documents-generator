export const ENTITY_STORE_OPTIONS = {
  seed: "seed",
  criticality: "criticality",
  riskEngine: "riskEngine",
  rule: "rule",
};

export const generateNewSeed = () => {
  return Math.round(Math.random() * 100000);
}