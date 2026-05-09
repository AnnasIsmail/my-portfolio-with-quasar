import type { Router } from 'vue-router';

/**
 * Navigate to a new route only when the target differs from the current path.
 * Keeping this helper pure makes it easier to reuse from both setup() and methods.
 */
export const movePage = (
  router: Pick<Router, 'push'>,
  currentPath: string,
  path: string
): void => {
  if (path === currentPath) return;
  void router.push(path);
};
