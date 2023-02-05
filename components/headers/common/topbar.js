import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const TopBar = ({ topClass }) => {
  return (
    <div id="topHeader" className={`top-header ${topClass ? topClass : ""}`}>
      <Container>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Our Multimart</li>
                <li>
                  <i class="fa-solid fa-phone-volume"></i>
                  {"Call Us"}: +8801972252777
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
            <ul className="header-dropdown">
              <li className="mobile-wishlist compare-mobile">
                <Link href={`/page/compare`}>
                  <a>
                    <i class="fa-solid fa-scale-balanced"></i>
                    {"Compare"}
                  </a>
                </Link>
              </li>
              <li className="mobile-wishlist">
                <Link href={`/page/account/wishlist`}>
                  <a>
                    <i class="fa-solid fa-heart-circle-plus"></i>
                    {"wishlist"}
                  </a>
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i class="fa-solid fa-user-gear"></i> {"My account"}
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
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
