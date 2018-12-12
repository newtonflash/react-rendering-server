const SCREEN_WIDTH_XL_MIN = 1440;
const SCREEN_WIDTH_LG_MAX = SCREEN_WIDTH_XL_MIN - 1;
const SCREEN_WIDTH_LG_MIN = 1024;
const SCREEN_WIDTH_MD_MAX = SCREEN_WIDTH_LG_MIN - 1;
const SCREEN_WIDTH_MD_MIN = 768;
const SCREEN_WIDTH_SM_MAX = SCREEN_WIDTH_MD_MIN - 1;
const SCREEN_WIDTH_SM_MIN = 420;
const SCREEN_WIDTH_XS_MAX = SCREEN_WIDTH_SM_MIN - 1;

const GRID_XL_OUTSIDE = 64;
const GRID_LG_OUTSIDE = 64;
const GRID_MD_OUTSIDE = 32;
const GRID_SM_OUTSIDE = 32;
const GRID_XS_OUTSIDE = 24;

const GRID_XL_INSIDE = 32;
const GRID_LG_INSIDE = 32;
const GRID_MD_INSIDE = 24;
const GRID_SM_INSIDE = 24;
const GRID_XS_INSIDE = 18;

const gridDimensions = {
  xs: {
    minScreenWidth: 0,
    maxScreenWidth: SCREEN_WIDTH_XS_MAX,
    outsidePadding: GRID_XS_OUTSIDE,
    insidePadding: GRID_XS_INSIDE,
  },
  sm: {
    minScreenWidth: SCREEN_WIDTH_SM_MIN,
    maxScreenWidth: SCREEN_WIDTH_SM_MAX,
    outsidePadding: GRID_SM_OUTSIDE,
    insidePadding: GRID_SM_INSIDE,
  },
  md: {
    minScreenWidth: SCREEN_WIDTH_MD_MIN,
    maxScreenWidth: SCREEN_WIDTH_MD_MAX,
    outsidePadding: GRID_MD_OUTSIDE,
    insidePadding: GRID_MD_INSIDE,
  },
  lg: {
    minScreenWidth: SCREEN_WIDTH_LG_MIN,
    maxScreenWidth: SCREEN_WIDTH_LG_MAX,
    outsidePadding: GRID_LG_OUTSIDE,
    insidePadding: GRID_LG_INSIDE,
  },
  xl: {
    minScreenWidth: SCREEN_WIDTH_XL_MIN,
    maxScreenWidth: Number.POSITIVE_INFINITY,
    outsidePadding: GRID_XL_OUTSIDE,
    insidePadding: GRID_XL_INSIDE,
  },
};

export {
  SCREEN_WIDTH_XL_MIN,
  SCREEN_WIDTH_LG_MAX,
  SCREEN_WIDTH_LG_MIN,
  SCREEN_WIDTH_MD_MAX,
  SCREEN_WIDTH_MD_MIN,
  SCREEN_WIDTH_SM_MAX,
  SCREEN_WIDTH_SM_MIN,
  SCREEN_WIDTH_XS_MAX,
  gridDimensions,
};
