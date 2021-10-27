interface Props {
  weathercode: number;
  time?: number;
}

const weatherCodeIcon = ({ weathercode }: Props) => {

const today = new Date();
const time = today.getHours()
const isNight = time > 20 || time < 6

  switch (weathercode) {
    case 0:
    case 1:
      if(isNight){
        return 'weather-night';
      }
      return 'weather-sunny';
    case 2:
      if(isNight){
        return 'weather-night-partly-cloudy';
      }
      return 'weather-partly-cloudy';
    case 3:
      return 'weather-cloudy';
    case 45:
    case 48:
      return 'weather-fog';
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return 'weather-rainy';
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return 'weather-pouring';
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return 'weather-snowy';
    case 95:
    case 96:
    case 99:
      return 'weather-lightning';
    default:
      return 'weather-sunny';
  }
};
export default weatherCodeIcon;
