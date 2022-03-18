export const mobile = 428;
export const tablet = 1024;
export const desktop = 1440;

const media = {
  mobile: `@media screen and (max-width: ${mobile}px)`,
  tablet: `@media screen and (min-width: ${mobile + 1}px) and (max-width: ${tablet}px)`,
  tabletWide: `@media screen and (min-width: ${mobile + 1}px) and (max-width: ${tablet}px) and (orientation: landscape)`,
  desktop: `@media screen and (min-width: ${tablet + 1}px) and (max-width: ${desktop}px)`,
  fullWidth: `@media screen and (min-width: ${desktop + 1}px)`,
  hover: "@media (hover: hover) ",
  noHover: "@media (hover: none) ",
};

export default media;