import { freelancers as defaultFreelancers } from "./freelancers";

const STORAGE_KEY = "skillhub-freelancers";

export function getFreelancers() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultFreelancers;

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : defaultFreelancers;
  } catch {
    return defaultFreelancers;
  }
}

export function saveFreelancers(nextFreelancers) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFreelancers));
  window.dispatchEvent(new Event("freelancers-updated"));
}
