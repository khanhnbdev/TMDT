import type { PageProps } from "./types";
import AuthPage from "./AuthPage";
import WishlistPage from "./WishlistPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import AccountPage from "./AccountPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import ProductPage from "./ProductPage";
import ErrorPage from "./ErrorPage";

export default function PageRouter(props: PageProps) {
  switch (props.route) {
    case "/signup":
    case "/login":
      return (
        <AuthPage
          route={props.route}
          navigate={props.navigate}
          showNotice={props.showNotice}
        />
      );
    case "/wishlist":
      return <WishlistPage {...props} />;
    case "/cart":
      return <CartPage {...props} />;
    case "/checkout":
      return <CheckoutPage {...props} />;
    case "/account":
      return <AccountPage {...props} />;
    case "/contact":
      return <ContactPage {...props} />;
    case "/about":
      return <AboutPage {...props} />;
    case "/product":
      return <ProductPage key={props.product?.name} {...props} />;
    default:
      return <ErrorPage navigate={props.navigate} />;
  }
}
