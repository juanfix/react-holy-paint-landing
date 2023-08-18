import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(swAlert);

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
      //Swal.fire('Error sending the mail.', error.response.data.msg, 'error');
      MySwal.fire({
        icon: 'error',
        title: 'Error sending the mail.',
        text: error.response.data.msg,
      });
    }
  };

  return {
    //* Properties

    //* Methods
    startCreatingAndSendingMail,
  };
};
