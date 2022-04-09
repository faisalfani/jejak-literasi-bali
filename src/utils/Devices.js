const size = {
  small_phone: '374px',
  phone: '576px',
  tablet: '768px',
  desktop: '992px',
};

const Devices = {
  small_phone: `@media screen and (max-width: ${size.small_phone})`,
  phone: `@media screen and (max-width: ${size.phone})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
};

export default Devices;
