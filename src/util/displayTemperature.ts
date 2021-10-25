interface Props {
  temperature: number;
  unit: string;
}

const displayTemperature = ({ temperature, unit }: Props) => {
  if (unit === 'f') {
    return Math.round(temperature * 1.8 + 32);
  }
  return Math.round(temperature);
};

export default displayTemperature;
