import { AppBar, Page, LogoImg, IconImg, FloatingButton, PageBody } from "./style";
import Logo from "../../assets/closet_store2.svg";
import IconSignin from "../../assets/log-in-outline.svg";
import IconSignout from "../../assets/log-out-outline.svg";
import UserContext from "../../context/UserContext.js";
import { useContext } from "react";
import IconCart from "../../assets/cart-outline.svg";

export default function DefaultPage({ children }) {

    const { userData, setUserData } = useContext(UserContext);

    return (
        <Page>
            <FloatingButton>
                <img src={IconCart} alt="Icon" />
            </FloatingButton>
            <AppBar>
                <div style={{ width: "25px" }}></div>
                <LogoImg src={Logo} />
                <IconImg src={userData.token ? IconSignin : IconSignout} />
            </AppBar>
            <PageBody>{children}</PageBody>
        </Page>
    );
}