export type EnvConfiguration<T = unknown> = {
  local: T;
  development: T;
  uat: T;
  e2e: T;
  preproduction: T;
  production: T;
};
