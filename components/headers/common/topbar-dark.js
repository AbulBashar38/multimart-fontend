import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { firebase_app } from "../../../config/base";
import { useRouter } from "next/router";

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const firebaseLogout = () => {
    firebase_app.auth().signOut();
    router.push("/page/account/login-auth");
  };
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Multimart</li>
                <li>
                  <i class="fa-solid fa-phone-volume"></i> Contact :
                  +8801972252777
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link href="/page/account/wishlist">
                  <a>
                    <i class="fa-solid fa-heart-circle-plus"></i> wishlist
                  </a>
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i class="fa-solid fa-user-gear"></i> Account
                <ul className="onhover-show-div">
                  <li>
                    <Link href={`/page/account/login`}>
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/page/account/register`}>
                      <a>Register</a>
                    </Link>
                  </li>
                  <li onClick={() => firebaseLogout()}>
                    <a>Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
