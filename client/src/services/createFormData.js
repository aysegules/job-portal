const createFormData = (values) => {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      formData.append(key, value);
    }
  });

  return formData;
};

export default createFormData;
