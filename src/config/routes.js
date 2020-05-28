import MainPage from '../pages/MainPage.js';
import UserProfilePage from '../pages/UserProfilePage';
import NotFoundPage from '../pages/NotFoundPage.js';
import ClassifiedsManagementPage from '../pages/ClassifiedsManagementPage';
import ClassifiedDetailsPage from '../pages/SingleClassifiedViewPage';
import EditSingleClassifiedPage from '../pages/EditSingleClassifiedPage';
import ClassifiedsPage from '../pages/ClassifiedsListPage.js';
import GalleryListPage from '../pages/GalleryListPage.js';

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
    path: "/account/classifieds/:id/edit",
    component: EditSingleClassifiedPage,
    key: "Classifieds details edition page"
  }, 
  {
    path: "/account/classifieds",
    component: ClassifiedsManagementPage,
    key: "User's classifieds management panel"
  },
  {
    path: "/classifieds/:id",
    component: ClassifiedDetailsPage,
    key: "Classifieds details"
  },
  {
    path: "/classifieds",
    component: ClassifiedsPage,
    key: "Classifieds"
  },
  {
    path: "/gallery",
    component: GalleryListPage,
    key: "Gallery of images"
  },
  {
    exact: true,
    path: "*",
    component: NotFoundPage,
    key: "Error 404"
  }
];

