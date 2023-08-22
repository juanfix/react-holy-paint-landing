import holyPaintApi from '../api/holyPaintApi';

export const useAxiosBlogs = () => {
  const startCreatingAndSendingMail = async (name, phone, email, message) => {
    try {
      const { data } = await holyPaintApi.post('/mail', {
        name,
        phone,
        email,
        message,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* Properties

    //* Methods
    startCreatingAndSendingMail,
  };
};
