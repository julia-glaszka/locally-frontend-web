import App from '../App.js';
import UserProfilePage from '../pages/UserProfilePage';
import NotFoundPage from '../pages/NotFoundPage.js';
import ClassifiedsManagementPage from '../pages/ClassifiedsManagementPage';
import ClassifiedDetailsPage from '../pages/ClassifiedDetailsPage';

export const routes = [
  {
    exact: true,
    path: "/",
    component: App,
    key: "Main",
  }, {
    path: "/users/:id",
    component: UserProfilePage,
    key: "User Profile Details"
  }, {
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
    exact: true,
    path: "*",
    component: NotFoundPage,
    key: "Error 404"
  }
];

