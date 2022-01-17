import MainPage from '../pages/main/MainPage.js';
import UserProfilePage from '../pages/user/UserProfilePage';
import NotFoundPage from '../pages/not-found/NotFoundPage.js';
import OffersManagementPage from '../pages/offers-management/OffersManagementPage';
import SingleOfferDetailsPage from '../pages/offers/SingleOfferViewPage';
import EditSingleOfferPage from '../pages/offers-management/EditSingleOfferPage';
import OffersPage from '../pages/offers/OffersListPage.js';
import GalleryListPage from '../pages/gallery/GalleryListPage.js';
import AuthPage from '../pages/user/AuthPage.js';

export const routes = [
  {
    // exact: true,
    path: '/',
    element: <MainPage/>,
    key: "Main",
  }, {
    path: "/users/:id",
    element: <UserProfilePage/>,
    key: "User Profile Details"
  },  {
    path: "/account/offers/:id/edit",
    element: <EditSingleOfferPage/>,
    key: "offers details edition page"
  },
  {
    path: "/account/offers",
    element: <OffersManagementPage/>,
    key: "User's offers management panel"
  },
  {
    path: "/offers/:id",
    element: <SingleOfferDetailsPage/>,
    key: "offers details"
  },
  {
    path: "/offers",
    element: <OffersPage/>,
    key: "offers"
  },
  {
    path: "/gallery",
    element: <GalleryListPage/>,
    key: "Gallery of images"
  },
  {
    path: "/auth",
    element: <AuthPage/>,
    key: "Authentication page"
  },
  {
    exact: true,
    path: "*",
    element: <NotFoundPage/>,
    key: "Error 404"
  }
];
