export const paramUrl = (paramObject) => {
  const params = new URLSearchParams({ ...paramObject });
  return params.toString();
};
