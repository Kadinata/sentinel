export default (value) => {

  let div_count = 0;
  let unit = '';

  while (value > 1000) {
    value = value / 1000;
    div_count += 1;
  }

  switch (div_count) {
    case 0:
      unit = 'Bytes';
      break;
    case 1:
      unit = 'kB';
      break;
    case 2:
      unit = 'MB';
      break;
    case 3:
      unit = 'GB';
      break;
    case 4:
      unit = 'TB';
      break;
    default:
      break;
  }
  return { value, unit };
};