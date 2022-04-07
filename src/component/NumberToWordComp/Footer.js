import React from "react";
import { FacebookFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function Footer() {
  let history = useHistory();

  return (
    <div className="footer">
      <p>Made with ❤ by numberstowords.online </p>
      <div>
        <div>
          <span
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact Us{" "}
          </span>
          <span className="px-2">|</span>
          <span
            onClick={() => {
              history.push("/privacy");
            }}
          >
            {" "}
            Privacy Policy
          </span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/numberstowords"
            target={"_blank"}
            className="facebook"
          >
            <FacebookFilled />
          </a>
          {/* <a href="/twitter.com" target={"_blank"} className="twitter">
            <TwitterOutlined />
          </a> */}
        </div>
      </div>
    </div>
  );
}
