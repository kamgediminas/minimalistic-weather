import colors from '../constants/colors';
import { useSelector } from 'react-redux';

export const useColor = () => {
  const theme = useSelector(({ settings }: any) => settings.theme);

  switch (theme) {
    case 'dark':
      return {
        colors: {
          background: colors.black,
          text: colors.white,
        },
        darkStatusIcons: false,
      };

    default:
      return {
        colors: {
          background: colors.white,
          text: colors.black,
        },
        darkStatusIcons: true,
      };
  }
};
