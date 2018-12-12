import FooterCopyRight from './footer-copy-right/footer-copy-right';
import RoomOverviewHeaderSection from './RoomOverviewHeaderSection/RoomOverviewHeaderSection.component';

const componentsList = {
    FooterCopyRight,
    RoomOverviewHeaderSection
};

const getComponentByID = id => {
    return componentsList[id];
};

export default getComponentByID;