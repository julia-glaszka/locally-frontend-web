import MainPage from '../pages/main/MainPage.js';
import UserProfilePage from '../pages/user/UserProfilePage';
import NotFoundPage from '../pages/not-found/NotFoundPage.js';
import OffersManagementPage from '../pages/offers-management/OffersManagementPage';
import SingleOfferDetailsPage from '../pages/offers/SingleOfferViewPage';
import EditSingleOfferPage from '../pages/offers-management/EditSingleOfferPage';
import OffersPage from '../pages/offers/OffersListPage.js';
import GalleryListPage from '../pages/gallery/GalleryListPage.js';
import LoginPage from '../pages/user/LoginPage.js';

export const routes = [
  {
    exact: true,
    path: "/",
    component: MainPage,
    key: "Main",
  }, {
    path: "/users/:id",
    component: UserProfilePage,
    key: "User Profile Details"
  },  {
    path: "/account/offers/:id/edit",
    component: EditSingleOfferPage,
    key: "offers details edition page"
  },
  {
    path: "/account/offers",
    component: OffersManagementPage,
    key: "User's offers management panel"
  },
  {
    path: "/offers/:id",
    component: SingleOfferDetailsPage,
    key: "offers details"
  },
  {
    path: "/offers",
    component: OffersPage,
    key: "offers"
  },
  {
    path: "/gallery",
    component: GalleryListPage,
    key: "Gallery of images"
  },
  {
    path: "/login",
	component: LoginPage,
	key: "Login to user page"
 },
  {
    exact: true,
    path: "*",
    component: NotFoundPage,
    key: "Error 404"
  }
];
